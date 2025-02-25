from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import HotelRoom
from .serializers import HotelRoomSerializers

# Create your views here.
@api_view(['GET'])
def get_rooms(request):
  rooms = HotelRoom.objects.all()
  serializer = HotelRoomSerializers(rooms, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def get_room(request, id):
  try:
    room = HotelRoom.objects.get(id=id)
    serializer = HotelRoomSerializers(room)
    return Response(serializer.data)
  except HotelRoom.DoesNotExist:
    return Response({"error": "Room not found"}, status=404)