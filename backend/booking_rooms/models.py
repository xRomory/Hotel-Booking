from django.db import models
from django.core.exceptions import ValidationError
from hotel_rooms.models import HotelRoom
from users.models import CustomUser

# Create your models here.

#Data of Users when booking

class RoomBooking(models.Model):
  ROOM_STATUS = [
    ('available', 'Available'),
    ('cancelled', 'Cancelled'),
    ('occupied', 'Occupied'),
    ('reserved', 'Reserved')
  ]

  customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
  room = models.ForeignKey(HotelRoom, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=150, default='')
  last_name = models.CharField(max_length=100, default='')
  email = models.EmailField()
  contact_number = models.CharField(max_length=20, default='')
  check_in = models.DateField()
  check_out = models.DateField()
  status = models.CharField(max_length=20, choices=ROOM_STATUS, default='available')

  def __str__(self):
    return f"Booking for {self.first_name} {self.last_name} - {self.status}"
  
  def clean(self):
    if self.check_out <= self.check_in:
      raise ValidationError("Check-out must be after check-in date.")

  def save(self, *args, **kwargs):
    if self.status == 'reserved' or self.status == 'occupied':
        self.room.status = self.status
    elif self.status == 'cancelled':
        self.room.status = 'available'  # Make the room available again
    self.room.save()
    super().save(*args, **kwargs)

#Data of Transaction when a user books for room
class Transaction(models.Model):
  booking = models.ForeignKey(RoomBooking, on_delete=models.CASCADE)
  cardholder_first_name = models.CharField(max_length=150, default='')
  cardholder_last_name = models.CharField(max_length=150, default='')
  amount_paid = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
  total_payment = models.DecimalField(max_digits=10, decimal_places=2)
  card_number = models.CharField(max_length=16)
  transaction_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"Transaction for {self.booking} - Paid: {self.amount_paid} / Total Amount: {self.total_payment}"
  
  def is_fully_paid(self):
    return self.amount_paid >= self.total_payment
  
  def save(self, *args, **kwargs):
    if self.amount_paid is None:
      self.amount_paid = self.total_payment  # Default to full payment
    super().save(*args, **kwargs)