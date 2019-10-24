from django.db import models
from django.contrib.auth.models import AbstractUser

class Brand(models.Model):
    name = models.CharField(max_length=100)
    company = models.ForeignKey('Company', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} owned by {self.company}"

class CustomUser(AbstractUser):
    favorite_brands = models.ManyToManyField(Brand, blank=True)

class Company(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=25, blank=True)
    size = models.IntegerField(default=0)
    value = models.IntegerField(default=0)
    parent = models.ForeignKey('self', blank=True, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

class Politician(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=3)
    district = models.CharField(max_length=10, blank=True)
    party = models.CharField(max_length=50)
    office = models.CharField(max_length=50)
    assumed_office = models.DateTimeField()
    donors = models.ManyToManyField('Company')

    def __str__(self):
        return f"{self.office} {self.name}, {self.state} - {self.party}"

class Legislation(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    bill_number = models.CharField(max_length=50)
    voters = models.ManyToManyField('Politician')