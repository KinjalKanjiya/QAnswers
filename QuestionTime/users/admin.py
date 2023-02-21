from django.contrib import admin
#To manage the user by admin site we use UserAdmin
from django.contrib.auth.admin import UserAdmin
from users.models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display =[ 'username','email','is_staff']

admin.site.register(CustomUser,CustomUserAdmin)
