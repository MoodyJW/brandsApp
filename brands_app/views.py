from brands_app.models import CustomUser, Brand, Company, Politician, Legislation
from brands_app.serializers import CustomUserSerializer, BrandSerializer, CompanySerializer, PoliticianSerializer, LegislationSerializer
from rest_framework import generics, permissions, renderers, viewsets
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.reverse import reverse
from brands_app.permissions import IsOwnerOrReadOnly, IsAdminUserOrReadOnly

class PoliticianViewSet(viewsets.ModelViewSet):
    queryset = Politician.objects.all()
    serializer_class = PoliticianSerializer
    # permission_classes = [IsAdminUserOrReadOnly, ]

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    # permission_classes = [IsOwnerOrReadOnly]

class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    # permission_classes = [IsAdminUserOrReadOnly, ]

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    # permission_classes = [IsAdminUserOrReadOnly, ]

class LegislationViewSet(viewsets.ModelViewSet):
    queryset = Legislation.objects.all()
    serializer_class = LegislationSerializer
    # permission_classes = [IsAdminUserOrReadOnly, ]