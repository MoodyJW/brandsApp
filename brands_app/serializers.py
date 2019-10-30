from rest_framework import serializers
from brands_app.models import Brand, Company, Politician, Legislation
from .models import CustomUser

class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['url', 'id', 'username', 'password', 'email', 'date_joined', 'favorite_brands']
        extra_kwargs = {'username': {'required': True}, 'password': {'required': True, 'write_only': True}, 'email': {'required': True}, } 
    
    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = ['url', 'id', 'name', 'company', 'img_url']

class CompanySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Company
        fields = ['url', 'id', 'name', 'img_url', 'cid', 'country', 'size', 'value', 'parent', 'company_set', 'brand_set']

class PoliticianSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Politician
        fields = ['url', 'id', 'cid', 'name', 'state', 'district', 'party', 'office', 'assumed_office', 'donors']

class LegislationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Legislation
        fields = ['url', 'id', 'name', 'description', 'bill_number', 'voters']
