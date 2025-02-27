from rest_framework import serializers
from .models import RoomBooking, Transaction

class RoomBookingSerializer(serializers.ModelSerializer):
  class Meta:
    model = RoomBooking
    fields = '__all__'

  def validation(self, data):
    if data['check_out'] <= data['check_in']:
      raise serializers.ValidationError("Check-out must be after check-in date")
    return data
  
class TransactionSerializer(serializers.ModelSerializer):
  booking_details = RoomBookingSerializer(source='booking', read_only=True)

  class Meta:
    model = Transaction
    fields = '__all__'

  def validate_amount_paid(self, value):
    if value < 0:
      raise serializers.ValidationError("Amount paid cannot be negative or less than 0")
    return value
  
  def validate(self, attrs):
        total_payment = attrs.get("total_payment", 0)
        amount_paid = attrs.get("amount_paid", total_payment)  # Default to total_payment if not provided
        attrs["amount_paid"] = amount_paid  # Ensure it's set in attrs

        if amount_paid > total_payment:
            raise serializers.ValidationError("Amount paid cannot exceed total payment.")

        return attrs