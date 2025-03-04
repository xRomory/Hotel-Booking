from django.urls import path
from .views import RoomBookingListCreateView, RoomBookingDetailView, TransactionListCreateView, TransactionDetailsView

urlpatterns = [
  path('room-bookings/', RoomBookingListCreateView.as_view(), name='room-booking-list-create'),
  path('room-bookings/<int:pk>/', RoomBookingDetailView.as_view(), name='room-booking-detail'),
  path('transactions/', TransactionListCreateView.as_view(), name='transactions-list-create'),
  path('transactions/<int:pk>/', TransactionDetailsView.as_view(), name='transactions-detail'),
]