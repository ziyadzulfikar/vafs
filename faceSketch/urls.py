from django.urls import path

from . import views

urlpatterns = [
    path('', views.Home, name = 'Home'),
    path('face', views.face, name = 'face'),
    path('new', views.new, name = 'new'),
    path('saved', views.saved, name = 'saved'),
    path('open', views.open, name = 'open'),
    path('about', views.about, name = 'about'),
    path('close', views.close, name = 'close'),
    path('gender', views.gender, name = 'gender'),
    path('Describe', views.describe, name = 'describe'),
    path('textSpeech', views.textSpeech, name = 'textSpeech'),
]