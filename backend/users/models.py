from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

# Create your models here.
class CustomUser (AbstractUser):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=20)
  username = models.CharField(max_length=50, unique=True)
  email = models.EmailField(unique=True)
  USERNAME_FIELD = 'username'  # Ensures username is used for authentication
  REQUIRED_FIELDS = ['email', 'first_name', 'last_name']

  groups = models.ManyToManyField(Group, related_name="customer_set", blank=True)
  user_permissions = models.ManyToManyField(Permission, related_name="customer_set", blank=True)

  def __str__ (self):
    return self.username