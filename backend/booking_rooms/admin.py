from django.contrib import admin
from .models import RoomBooking, Transaction

# Register your models here.
admin.site.register(RoomBooking)
admin.site.register(Transaction)