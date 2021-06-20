from django.urls import re_path

from . import consumers

webSocket_Urlpatterns = [
    re_path(r'',consumers.ChatConsumer.as_asgi()),
]