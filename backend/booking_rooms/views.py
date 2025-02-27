from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import RoomBooking, Transaction
from .serializers import RoomBookingSerializer, TransactionSerializer

# Create your views here.

@api_view(['POST'])
def create_transaction(request):
    serializer = TransactionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

#(CRUD Operations) Logic for Room Booking and Transaction

#This able us to list all bookings or create a new one
class RoomBookingListCreateView(generics.ListCreateAPIView):
    queryset = RoomBooking.objects.all()
    serializer_class = RoomBookingSerializer

    def create_perform(self, serializer):
        booking = serializer.save()
        booking.room.status = "reserved" 
        booking.room.save()

#Ables us to Retrieve, update, and delete a specific booking
class RoomBookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RoomBooking.objects.all()
    serializer_class = RoomBookingSerializer

    def perform_update(self, serializer):
        booking = serializer.save()
        booking.room.status = booking.status
        booking.room.save()

    def perform_destroy(self, instance):
        instance.room.status = "available"  # Reset room status when canceled
        instance.room.save()
        instance.delete()

    def delete(self, request, *args, **kwargs):
        booking = self.get_object()
        if Transaction.objects.filter(booking=booking).exists():
            return Response({"error": "Cannot cancel a booking that has a transaction."}, status=status.HTTP_400_BAD_REQUEST)
        return super().delete(request, *args, **kwargs)
    
class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        # Ensure 'amount_paid' is set
        if 'amount_paid' not in data or data['amount_paid'] in [None, '']:
            data['amount_paid'] = data.get('total_payment', 0)  # Default to full payment

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class TransactionDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer