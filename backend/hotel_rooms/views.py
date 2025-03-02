from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import HotelRoom
from .serializers import HotelRoomSerializers

# Create your views here.
@api_view(['GET'])
# @permission_classes([AllowAny])
def get_rooms(request):
  rooms = HotelRoom.objects.all()
  serializer = HotelRoomSerializers(rooms, many=True)
  return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([AllowAny])
def get_room(request, id):
  try:
    room = HotelRoom.objects.get(id=id)
    serializer = HotelRoomSerializers(room)
    return Response(serializer.data)
  except HotelRoom.DoesNotExist:
    return Response({"error": "Room not found"}, status=404)