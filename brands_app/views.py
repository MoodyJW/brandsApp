from brands_app.models import CustomUser, Brand, Company, Politician, Legislation, Donation, PAC, Lobbyist
from brands_app.serializers import CustomUserSerializer, BrandSerializer, CompanySerializer, PoliticianSerializer, LegislationSerializer, DonationSerializer, LobbyistSerializer, PACSerializer
from rest_framework import generics, permissions, renderers, viewsets
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.reverse import reverse
from brands_app.permissions import IsOwnerOrReadOnly, IsAdminUserOrReadOnly
# from knox.models import AuthToken

# trying to use knox, but went back to default DRF

# class RegistrationAPI(generics.GenericAPIView):
#     serializer_class = CreateCustomUserSerializer
#     queryset = CustomUser.objects.all()
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data = request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()

#         return Response({
#             "user": CustomUserSerializer(user, context=self.get_serializer_context()).data,
#             "token": AuthToken.objects.create(user)
#         })

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

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

class LobbyistViewSet(viewsets.ModelViewSet):
    queryset = Lobbyist.objects.all()
    serializer_class = LobbyistSerializer

class PACViewSet(viewsets.ModelViewSet):
    queryset = PAC.objects.all()
    serializer_class = PACSerializer