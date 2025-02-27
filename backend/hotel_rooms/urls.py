from django.urls import path
from .views import get_rooms, get_room

urlpatterns = [
  path('room-details/', get_rooms, name='get_rooms'),
  path('room-details/<int:id>/', get_room)
]