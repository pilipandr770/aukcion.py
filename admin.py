from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'phone_number', 'date_of_birth', 'address', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone_number', 'date_of_birth', 'address')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)