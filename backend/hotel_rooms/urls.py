from django.urls import path
from .views import get_rooms, get_room

urlpatterns = [
  path('rooms/', get_rooms, name='get_rooms'),
  path('rooms/<int:id>/', get_room)
]