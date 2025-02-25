from rest_framework import serializers
from .models import HotelRoom

class HotelRoomSerializers(serializers.ModelSerializer):
  class Meta:
    model = HotelRoom
    fields = '__all__'