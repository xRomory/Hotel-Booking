# from django.shortcuts import render
# from .permissions import IsAdminOrReadOnly
from rest_framework.exceptions import PermissionDenied
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from django.contrib.auth import login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .models import CustomUser
from django.middleware.csrf import get_token
from django.http import JsonResponse
from .serializers import UserSerializer


# Create your views here.

class RegisterUserView(generics.CreateAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

  def perform_create(self, serializer):
    customer = serializer.save()  # Save instance without committing to DB yet
    customer.set_password(serializer.validated_data["password"])  # Hash the password
    customer.save()  # Now save the hashed password in DB

    token, created = Token.objects.get_or_create(user=customer)

    # customer = serializer.save()
    # customer.set_password(serializer.validated_data["password"])

    # token, created = Token.objects.get_or_create(user=customer)

    response_data = {
      "customer": {
        "id": customer.id,
        "username": customer.username,
        "email": customer.email,
        "first_name": customer.first_name,
        "last_name": customer.last_name,
      }, 
      "token": token.key
    }

    self.response_data = response_data
  
  def create(self, request, *args, **kwargs):
    super().create(request, *args, **kwargs)
    return Response(self.response_data, status=status.HTTP_201_CREATED)
  
class Login(APIView):
  # @method_decorator(csrf_exempt)  # Disable CSRF protection for this endpoint
  # def dispatch(self, *args, **kwargs):
  #   return super().dispatch(*args, **kwargs)
  # @csrf_exempt

  permission_classes = [AllowAny]
  
  def post(self, request, *args, **kwargs):
    print("Received login request:", request.data)
    username = request.data.get("username")
    password = request.data.get("password")

    print(f"Attempting login for: {username}")
    print(f"Password: {password}")

    customer = authenticate(username=username, password=password)

    if customer is None:
      print("Authentication Failed")
      raise AuthenticationFailed('Invalid Username or Password')
    
    token, created = Token.objects.get_or_create(user=customer)
    
    login(request, customer)
    request.session.save()

    return Response({
      "customer": {
        "id": customer.id,
        "username": customer.username,
        "email": customer.email,
        "first_name": customer.first_name,
        "last_name": customer.last_name,
      },
      "token": token.key,
      "message": "Login Sucessful"
      
    }, status=status.HTTP_200_OK)

def csrf_token_view(request):
    return JsonResponse({"csrfToken": get_token(request)})
  
class Logout(APIView):
  def post(self, request):
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)

class CustomerListCreateView(generics.ListCreateAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    customer = self.request.user
    if customer.is_superuser or customer.is_staff:
      return CustomUser.objects.all()
    else:
      return CustomUser.objects.filter(id=customer.id)

class CustomerDetail(generics.RetrieveAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = UserSerializer

  def get_object(self):
    customer = self.request.user
    obj = super().get_object()

    if obj == customer or customer.is_staff or customer.is_superuser:
      return obj
    else:
      raise permissions.PermissionDenied("You do not have permission to access this user's details.")