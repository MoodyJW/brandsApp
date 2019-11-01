from bs4 import BeautifulSoup
import requests 
import json
from urllib.request import Request, urlopen
import urllib.request
import os
import sys
from django.conf import settings
import django
from brands_app.models import Politician, Company
from crpapi import CRP

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'group_project.settings')
django.setup()

open_secrets_key = 'edc22e5b2f7a4e1f701ef86da3976e6b'
crp = CRP(open_secrets_key)
states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

def api_url(state):
    api_front = 'https://www.opensecrets.org/api/?method=getLegislators&id='
    api_end = '&apikey='
    return api_front + state + api_end + open_secrets_key + '&output=json'

def all_50_state_api_urls():
    states_api_urls = []
    for state in states:
        states_api_urls.append(api_url(state))
    states_api_urls = list(dict.fromkeys(states_api_urls))
    return states_api_urls

def legislators_to_objects():
    api_urls_by_state = all_50_state_api_urls() 
    for url in api_urls_by_state:
        response = requests.get(url)
        jresp = response.json()
        for legis in jresp['response']['legislator']:
            try: 
                legislator = Politician.objects.get(name=legis['@attributes']['firstlast'])
                legislator.state=legis['@attributes']['office'][:2]
                legislator.district=legis['@attributes']['office']
                legislator.party=legis['@attributes']['party']
                legislator.office=legis['@attributes']['congress_office']
                legislator.assumed_office=legis['@attributes']['first_elected']
                legislator.cid=legis['@attributes']['cid']
                legislator.save()
                print("Updated! Legistlator ", legislator.name, " from ", legislator.state,"!!!")
            except:
                legislator = Politician(
                    name=legis['@attributes']['firstlast'],
                    state=legis['@attributes']['office'][:2],
                    district=legis['@attributes']['office'],
                    party=legis['@attributes']['party'],
                    office=legis['@attributes']['congress_office'],
                    assumed_office=legis['@attributes']['first_elected'],
                    cid=legis['@attributes']['cid']
                )
                legislator.save()
                print("Legislator: ", legislator.name," from ", legislator.state, " has been added!")

legislators_to_objects()

def api_url_for_polit(pol):
    api_front = 'https://www.opensecrets.org/api/?method=candContrib&cid='
    api_end = '&cycle=2019&apikey='
    return api_front + pol.cid + api_end + open_secrets_key + '&output=json'

def add_donors():
    legis = Politician.objects.all()
    comps = Company.objects.all()
    for politician in legis:
        pol_top_contrib = []
        response = requests.get(api_url_for_polit(politician))
        jresp = response.json()
        for c in jresp['response']['contributors']['contributor']:
            pol_top_contrib.append(c['@attributes']['org_name'])
        print(politician.name, ": ")
        for c in pol_top_contrib:
            print(c)
    