# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status, generics
from .models import CustomUser
from .serializers import UserSerializer

# Create your views here.

class RegisterUserView(generics.CreateAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = UserSerializer