from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'brands', views.BrandViewSet)
router.register(r'users', views.CustomUserViewSet)
router.register(r'companies', views.CompanyViewSet)
router.register(r'politicians', views.PoliticianViewSet)
router.register(r'legislation', views.LegislationViewSet)
router.register(r'donation', views.DonationViewSet)
router.register(r'lobbyist', views.LobbyistViewSet)
router.register(r'pac', views.PACViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]