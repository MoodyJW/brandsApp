from rest_framework import serializers
from brands_app.models import Brand, Company, Politician, Legislation, Donation, PAC, Lobbyist
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    favorite_brands = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'email', 'date_joined', 'favorite_brands']
        extra_kwargs = {'username': {'required': True}, 'password': {'required': True, 'write_only': True}, 'email': {'required': True}, } 
    
    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
# was trying to use knox, but going back to drf defaults for now

# class CreateCustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('id', 'username', 'password')
#         extra_kwargs = {'password': {'write_only': True}}
    
#     def create(self, validated_data):
#         user = CustomUser.objects.create_user(validated_data['username'],
#                                         None,
#                                         validated_data['password'])
#         return user

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name', 'company', 'img_url']

class CompanySerializer(serializers.ModelSerializer):
    brand_set = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)
    company_set = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)
    class Meta:
        model = Company
        fields = ['id', 'name', 'country', 'size', 'value', 'parent', 'company_set', 'donations', 'brand_set']

class PoliticianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Politician
        fields = ['id', 'name', 'state', 'district', 'party', 'office', 'assumed_office', 'donors']

class LegislationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legislation
        fields = ['id', 'name', 'description', 'bill_number', 'voters']

class LobbyistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lobbyist
        fields = ['id', 'name']

class PACSerializer(serializers.ModelSerializer):
    class Meta:
        model = PAC
        fields = ['id', 'name']

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['id', 'cycle', 'politician', 'lobbyist', 'total', 'pacs']
  