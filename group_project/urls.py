from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include

urlpatterns = [
    path('', include('brands_app.urls')),
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]