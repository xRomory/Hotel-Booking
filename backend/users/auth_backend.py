from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.hashers import check_password
# from django.contrib.auth.base_user import AbstractBaseUser
# from typing import Any


class EmailBackend(ModelBackend):
    def authenticate(self, request, username = None, password = None, **kwargs):
        CustomUserModel = get_user_model()
        try:
            # customer = CustomUserModel.objects.get(username=username)
            customer = CustomUserModel.objects.filter(username=username).first() or CustomUserModel.objects.filter(email=username).first()
        except CustomUserModel.DoesNotExist:
            return None
        else:
            # if customer.check_password(password, customer.password):
            # if customer.password == password: #makes the password in plaintext
            if customer and check_password(password, customer.password): 
                return customer
            return None