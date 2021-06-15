from django.contrib import admin
from django.urls import include, path
from mains import views


urlpatterns = [
    path('', views.home,name='home'),
    path('about', views.about,name='about'),
    path('contact', views.contact,name='contact'),
    path('video', views.video,name='video'),


]