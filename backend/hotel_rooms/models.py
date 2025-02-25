from django.db import models

# Create your models here.

#For Room Details Database only
class HotelRoom(models.Model):
  roomsTitle = models.CharField(max_length=255)
  description = models.TextField()
  descripFull = models.TextField()
  price = models.CharField(max_length=50)
  checkIn = models.CharField(max_length=50)
  checkOut = models.CharField(max_length=50)
  specialCheckIn = models.TextField()
  petsAllowed = models.BooleanField(default=False)
  maxOccupancy = models.IntegerField()
  amenities = models.JSONField()
  imgSrc = models.URLField()
  extraImages = models.JSONField()

  def __str__(self):
    return self.roomsTitle