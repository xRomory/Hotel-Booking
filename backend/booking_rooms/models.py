from django.conf import settings
from django.db import models
from django.core.exceptions import ValidationError
from hotel_rooms.models import HotelRoom
from datetime import time, datetime
# from users.models import CustomUser

# Create your models here.

#Data of Users when booking

class RoomBooking(models.Model):
  ROOM_STATUS = [
    ('available', 'Available'),
    ('cancelled', 'Cancelled'),
    ('occupied', 'Occupied'),
    ('reserved', 'Reserved')
  ]

  customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  room = models.ForeignKey(HotelRoom, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=150, default='')
  last_name = models.CharField(max_length=100, default='')
  email = models.EmailField()
  contact_number = models.CharField(max_length=20, default='')
  booking_date = models.DateField()
  check_in = models.DateTimeField()
  check_out = models.DateTimeField()
  status = models.CharField(max_length=20, choices=ROOM_STATUS, default='available')

  def __str__(self):
    return f"Booking for {self.first_name} {self.last_name} - {self.status}"

  def clean(self):
    super().clean()

    if self.check_in and self.check_out:
      if self.check_out <= self.check_in:
        raise ValidationError("Check-out must be after check-in date.")

    # Check for overlapping bookings
    overlapping_bookings = RoomBooking.objects.filter(
      room=self.room,
      status__in=['reserved', 'occupied'],
      check_in__lt=self.check_out,  # check-in before current check-out
      check_out__gt=self.check_in  # check-out after current check-in
    ).exclude(pk=self.pk)  # Exclude the current instance in case of updates

    if overlapping_bookings.exists():
      raise ValidationError("This room is already booked for the selected dates.")
    
  def save(self, *args, **kwargs):
    self.full_clean()  # Validate before saving

    if self.status in ['reserved', 'occupied']:
      self.room.status = self.status
    elif self.status == 'cancelled':
      self.room.status = 'available'

    self.room.save()
    super().save(*args, **kwargs)

#Data of Transaction when a user books for room
class Transaction(models.Model):
  booking = models.ForeignKey(RoomBooking, on_delete=models.CASCADE, related_name='transactions')
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
  
  def clean(self):
    if self.booking.status == 'cancelled':
        raise ValidationError("Cannot process a transaction for a canceled booking.")
    if self.amount_paid > self.total_payment:
        raise ValidationError("Amount paid cannot exceed the total payment.")
  
  def save(self, *args, **kwargs):
    self.full_clean()  # Ensures validation before saving
    super().save(*args, **kwargs)