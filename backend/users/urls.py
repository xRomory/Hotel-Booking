from django.urls import path
from .views import RegisterUserView, CustomerListCreateView, CustomerDetail, Login, Logout, csrf_token_view

urlpatterns = [
  path('register/', RegisterUserView.as_view(), name='register-user'),
  path('customer/', CustomerListCreateView.as_view(), name='customer-list'),
  path('customer/<int:pk>', CustomerDetail.as_view(), name='customer-detail'),
  path('login/', Login.as_view(), name='login'),
  path('logout/', Logout.as_view(), name='logout'),
  path("csrf/", csrf_token_view, name="csrf_token"),
]