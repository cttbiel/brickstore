from django.urls import path
from .views import (
    RegisterView, LoginView, user_profile, 
    update_profile, change_password, logout
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', logout, name='logout'),
    path('profile/', user_profile, name='profile'),
    path('profile/update/', update_profile, name='update_profile'),
    path('profile/change-password/', change_password, name='change_password'),
] 