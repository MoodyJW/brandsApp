from django.db import models
from django.contrib.auth.models import AbstractUser

class Brand(models.Model):
    name = models.CharField(max_length=100)
    company = models.ForeignKey('Company', on_delete=models.CASCADE)
    img_url = models.CharField(max_length=500, default='')

    def __str__(self):
        return f"{self.name} owned by {self.company}"

class CustomUser(AbstractUser):
    favorite_brands = models.ManyToManyField(Brand, blank=True)

class Company(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=25, blank=True)
    size = models.IntegerField(default=0)
    value = models.IntegerField(default=0)
    cid = models.CharField(max_length=200, default='')
    parent = models.ForeignKey('self', blank=True, on_delete=models.CASCADE, null=True)
<<<<<<< HEAD
    img_url = models.CharField(max_length=500, default='')
    donations = models.CharField(max_length=1000, default='')

=======
    donations = models.ManyToManyField('Donation', blank=True)
>>>>>>> b675715c0a2ebfb2d3521bc15a84c4dca10b8186
    def __str__(self):
        return self.name

class Donation(models.Model):
    cycle = models.CharField(max_length=10, default="2020")
    politician = models.ForeignKey('Politician', on_delete=models.CASCADE)
    lobbyist = models.ForeignKey('Lobbyist', on_delete=models.CASCADE)
    total = models.IntegerField(default=0)
    pacs = models.ForeignKey('PAC', on_delete=models.CASCADE)

class PAC(models.Model):
    name = models.CharField(max_length=100)

class Lobbyist(models.Model):
    name = models.CharField(max_length=100)

class Politician(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=3)
    district = models.CharField(max_length=10, blank=True)
    party = models.CharField(max_length=50)
    office = models.CharField(max_length=50)
    assumed_office = models.DateTimeField()
    donors = models.ManyToManyField('Company', blank=True)
    cid = models.CharField(max_length=100, default='Open Secrets CID')
    def __str__(self):
        return f"{self.office} {self.name}, {self.state} - {self.party}"

class Legislation(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    bill_number = models.CharField(max_length=50)
    voters = models.ManyToManyField('Politician')