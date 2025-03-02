from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated
from users.permissions import IsAdminOrReadOnly
from rest_framework.exceptions import PermissionDenied
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
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        customer = self.request.user
        if not customer.is_authenticated:  # Check if the user is logged in
            return RoomBooking.objects.none()  # Return empty queryset for anonymous users

        if not customer.is_superuser and not customer.is_staff:
            return RoomBooking.objects.filter(customer=customer) or RoomBooking.objects.none()

        return super().get_queryset()

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise PermissionDenied("You must be logged in to book a room.")
    
        booking = serializer.save(customer=self.request.user)
        booking.room.status = "reserved" 
        booking.room.save()

#Ables us to Retrieve, update, and delete a specific booking
class RoomBookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = RoomBooking.objects.all()
    serializer_class = RoomBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return RoomBooking.objects.none()
        return RoomBooking.objects.filter(customer=self.request.user)   

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
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Transaction.objects.none()
        return Transaction.objects.filter(booking__customer=self.request.user)
    
    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        # Ensure 'amount_paid' is set
        if 'amount_paid' not in data or data['amount_paid'] in [None, '']:
            data['amount_paid'] = data.get('total_payment', 0)

        # Ensure amount_paid does not exceed total_payment
        if float(data['amount_paid']) > float(data['total_payment']):
            return Response({"error": "Amount paid cannot exceed total payment."}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class TransactionDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return Transaction.objects.filter(booking__customer=self.request.user)