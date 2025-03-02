from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password']
    extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #   user = CustomUser.objects.create_user(
    #     first_name=validated_data["first_name"],
    #     last_name=validated_data["last_name"],
    #     username=validated_data["username"],
    #     email=validated_data["email"],
    #     password=validated_data["password"]
    #   )
    #   return user

    def create(self, validated_data):
      user = CustomUser.objects.create_user(**validated_data)
      return user
    