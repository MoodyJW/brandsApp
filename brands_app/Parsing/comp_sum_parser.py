from bs4 import BeautifulSoup
import requests 
import json
from urllib.request import Request, urlopen
import urllib.request
import os
import sys
from django.conf import settings
import django
from .models import Politician, Company 

companies = Company.objects.all()
open_secrets_key = 'edc22e5b2f7a4e1f701ef86da3976e6b'




