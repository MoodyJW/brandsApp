from bs4 import BeautifulSoup
import requests 
import json
from urllib.request import Request, urlopen
import urllib.request
import os
import sys
from django.conf import settings
import django
# if not settings.configured:
#     settings.configure(DEBUG=True)

# settings.configure(DEBUG=True)

# os.environ['DJANGO_SETTINGS_MODULE'] = 'group_project.settings'
# settings.configure(DEBUG=True)
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'group_project.settings')
django.setup()

# DJANGO_SETTINGS_MODULE = group_project.settings
from brands_app.models import Brand, Company
class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"
opener = AppURLopener()

def Coca_Cola_Parser():
    #Pull data from website
    coca_cola = requests.get('https://www.coca-colacompany.com/packages/brands')
    soup = BeautifulSoup(coca_cola.text)
    cokes = soup.select(".editorial-package .promo img")
    #Turn Soup into Python list
    coke_brands = {}
    for index, brand in enumerate(cokes): 
        coke_brands[brand.get("title")]= {
        "name": ((brand.get("title").split('.jpg')[0]).split('circle')[0]).title(),
        "url": "https://www.coca-colacompany.com" + brand.get("src") }
    return coke_brands

def Procter_and_Gamble_Parser():
    #Pull data from website
    req = Request('https://us.pg.com/brands/', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage)
    brands = soup.select(".brand__headline")
    #Turn Soup into Python Data
    pg_brands = []
    for brand in brands:
        pg_brands.append(brand.get_text().title())
    return pg_brands

def Unilever_Parser():
    #Pull data from website --US only
    req = Request('https://www.unilever.com/brands/?Country=408018&page=1',headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage)
    brands = soup.select('.brand-logos img')
    #Turn Soup into Python Data 
    uni_brands = []
    for brand in brands:
        uni_brands.append(brand.get('alt').split(' logo')[0].title())
    #Repeat Process for Page 2
    req = Request('https://www.unilever.com/brands/?Country=408018&page=2',headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage)
    brands = soup.select('.brand-logos img')
    for brand in brands:
        uni_brands.append(brand.get('alt').split(' logo')[0].title())
    return uni_brands

def Pepsico_Parser():
    #Pull data from website --US only
    req = Request('https://www.pepsico.com/brands/product-information', headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    soup = BeautifulSoup(webpage)
    brands = soup.select('.data-filter-grid__content button')
    #Turn Soup into Python List
    pepsico_brands = []
    for brand in brands:
        pepsico_brands.append(brand.get('data-item-name').title())
    return pepsico_brands

def Kellogs_Parser():
    #Pull Data from hidden json --we cracked it
    req = Request('https://lucid-kstl.kglobalservices.com/LucidServlet?collection=PROD_NEWTON_EN_US_PRODUCT&type=list&domain=http%3A%2F%2Flwfusion.dmitkellogg.com&sortdate=&sortdatemode=&sortmetaorder=&sortmetaname=&num=217&start=0&q=&filterMethod=or&callback=f&_=1571852165081', headers={'User-Agent':'Mozilla/5.0'})
    webpage = urlopen(req).read() 
    str_json = webpage.decode("utf-8").split("KSTLGSAfetchCallback(")[1].rsplit(')',1)[0]
    kellogs_json = json.loads(str_json)
    #Turn Json data into Python List
    kellogs_brands = []
    for key in kellogs_json['items']:
        name = key['metas']['gsaName']
        kellogs_brands.append(name.title())
    return kellogs_brands

def Wrigley_Parser():
    response = opener.open('https://www.mars.com/made-by-mars/mars-wrigley')
    webpage = response.read()
    soup_ready = webpage.decode("utf-8")
    soup = BeautifulSoup(soup_ready)
    brands = soup.select(".view-content .brand-detail .brand-title")
    #Turn Soup into Python List of Brands 
    wrigley_brands = []
    for brand in brands:
        wrigley_brands.append(brand.get_text().title())
    wrigley_brands = list(dict.fromkeys(wrigley_brands))
    return wrigley_brands

def Mars_Inc_Parser():
    mars_inc_brands = []
    #Scrape pages of site for the sectors of Mars Inc products
    petcare_response = opener.open('https://www.mars.com/made-by-mars/petcare')
    petcare_webpage = petcare_response.read()
    petcare_soup_ready = petcare_webpage.decode('utf-8')
    petcare_soup = BeautifulSoup(petcare_soup_ready)    
    petcare_brands = petcare_soup.select(".view-content .brand-detail .brand-title")
    food_response = opener.open('https://www.mars.com/made-by-mars/food')
    food_webpage = food_response.read()
    food_soup_ready = food_webpage.decode('utf-8')
    food_soup = BeautifulSoup(food_soup_ready)    
    food_brands = food_soup.select(".view-content .brand-detail .brand-title")
    #Turn Soup into Python List of Brands 
    for brand in petcare_brands:
        mars_inc_brands.append(brand.get_text().title())
    for brand in food_brands:
        mars_inc_brands.append(brand.get_text().title())
    #Remove duplicates
    mars_inc_brands = list(dict.fromkeys(mars_inc_brands))
    return mars_inc_brands

def General_Mills_Parser():
    #Pull data from GM site
    response = opener.open('https://www.generalmills.com/en/Brands/Overview')
    webpage = response.read()
    soup = BeautifulSoup(webpage)
    brands = soup.select('#brand-list-section h4')
    #Set data up in Python Lists
    gm_brands = []
    for brand in brands:
        gm_brands.append(brand.get_text().title())
    #Remove Duplicates 
    gm_brands = list(dict.fromkeys(gm_brands))
    return gm_brands

def Mondelez_Parser():
    #Pull data from site 
    response = opener.open('https://www.mondelezinternational.com/brands?region=&category=&powerbrand=')
    webpage = response.read() 
    soup = BeautifulSoup(webpage)
    brands = soup.select('.galleryItem-bd p')
    #Set data up as Python List
    mondelez_brands = [] 
    for brand in brands:
        mondelez_brands.append(brand.get_text().title())
    return mondelez_brands

def Johnson_Parser():
    #Pull data from site 
    response = opener.open('https://www.jnj.com/healthcare-products/consumer')
    webpage = response.read() 
    soup = BeautifulSoup(webpage)
    selected_brands = soup.select('.Tabber-tab .Product-title')
    other_brands = soup.select('.Tabber-tab .ProductListItem-items-item a')
    #Turn data into Python list      
    johnson_brands = []
    for brand in selected_brands:
        johnson_brands.append(brand.get_text().split("®")[0].title())
    for brand in other_brands:
        johnson_brands.append(brand.get_text().split("®")[0].title())
    #Remove Duplicates
    johnson_brands = list(dict.fromkeys(johnson_brands))
    return johnson_brands

def Kraft_Heinz_Parser():
    #Get data from website 
    response = opener.open('https://www.kraftheinzcompany.com/brands.html')
    webpage = response.read()
    soup = BeautifulSoup(webpage)
    brands = soup.select('.country_items')
    #Get brands only for US market
    us_div = ''
    for div in brands:
        li = div.select('h4')[0]
        if li.get_text() == 'United States':
            us_div = div
    #Turn data in Python list     
    us_div = us_div.select('li')
    kraft_heinz_brands = []
    for brand in us_div:
        kraft_heinz_brands.append(brand.get_text().title().strip())
    kraft_heinz_brands = list(dict.fromkeys(kraft_heinz_brands))
    return kraft_heinz_brands

def Nestle_Parser():
    nestle_brands = []
    urls = ['https://www.nestle.com/brands/baby-foods','https://www.nestle.com/brands/bottledwater','https://www.nestle.com/brands/cereals','https://www.nestle.com/brands/chocolateconfectionery','https://www.nestle.com/brands/coffee','https://www.nestle.com/brands/culinary-chilled-frozen','https://www.nestle.com/brands/dairy','https://www.nestle.com/brands/drinks', 'https://www.nestle.com/brands/foodservice', 'https://www.nestle.com/brands/healthcarenutrition', 'https://www.nestle.com/brands/ice-cream', 'https://www.nestle.com/brands/petcare']
    for page in urls:
        response = opener.open(page)
        webpage = response.read() 
        soup = BeautifulSoup(webpage)
        brands = soup.select('.field--name-field-summary-text .b-lazy')
        #Turn brands to Python List 
        for brand in brands:
            nestle_brands.append(brand.get('title').title().strip())
    nestle_brands = list(dict.fromkeys(nestle_brands))
    nestle_brands.remove("Map")
    return nestle_brands
        

 ###############   
#Parser for all Company Brands Lists to Create Objects 
def Parser_to_objects(brands_list, parent_company):
    for brand in brands_list:
        try:
            Brand.objects.get(name=brand)
            sel_brand = Brand.objects.get(name=brand)
            sel_brand.company.add(parent_company)
            sel_brand.save()
        except:
            new_brand_obj = Brand(name=brand, company=parent_company)
            new_brand_obj.save()
    return Brand.objects.all()

def dict_Parser_to_objects(brands_dict, parent_company):
    for brand in brands_dict:
        try:
            selected_brand = Brand.objects.get(name=brands_dict[brand]['name'])
            selected_brand.url = brands_dict[brand]['url']
            selected_brand.company.add(parent_company)
            selected_brand.save()
        except:
            new_brand_obj = Brand(name=brands_dict[brand]['name'], img_url=brands_dict[brand]['url'], company=parent_company)
            new_brand_obj.save()
    return Brand.objects.all

###############  
#Setting up Variable Data to Create objects in Database
#Getting companys from Database
coca_cola = Company.objects.get(name="Coca-Cola Inc.")
procter_and_gamble = Company.objects.get(name="Procter & Gamble")
unilever = Company.objects.get(name="Unilever")
pepsico = Company.objects.get(name="Pepsico")
kellogs = Company.objects.get(name="Kellogs")
wrigley = Company.objects.get(name="Wrigley")
mars_inc = Company.objects.get(name="Mars Inc.")
general_mills = Company.objects.get(name="General Mills")
mondelez =  Company.objects.get(name="Mondelez")
johnson =  Company.objects.get(name="Johnson + Johnson")
kraft_heinz = Company.objects.get(name="Kraft Heinz")
nestle = Company.objects.get(name="Nestle")

#Scraping Brand Names from Websites
coca_cola_brands = Coca_Cola_Parser()
procter_and_gamble_brands = Procter_and_Gamble_Parser()
unilever_brands = Unilever_Parser()
pepsico_brands = Pepsico_Parser()
kellogs_brands = Kellogs_Parser()
wrigley_brands = Wrigley_Parser()
mars_inc_brands = Mars_Inc_Parser()
general_mills_brands = General_Mills_Parser()
mondelez_brands = Mondelez_Parser()
johnson_brands = Johnson_Parser()
kraft_heinz_brands = Kraft_Heinz_Parser()
nestle_brands = Nestle_Parser()

# Adds objects to database with CC as parent
print (coca_cola_brands)
Parser_to_objects(coca_cola_brands, coca_cola)
Parser_to_objects(procter_and_gamble_brands, procter_and_gamble)
Parser_to_objects(unilever_brands, unilever)
Parser_to_objects(pepsico_brands, pepsico)
Parser_to_objects(kellogs_brands, kellogs)
Parser_to_objects(wrigley_brands, wrigley)
Parser_to_objects(mars_inc_brands, mars_inc)
Parser_to_objects(general_mills_brands, general_mills)
Parser_to_objects(mondelez_brands, mondelez)
Parser_to_objects(johnson_brands, johnson)
Parser_to_objects(kraft_heinz_brands, kraft_heinz)
Parser_to_objects(nestle_brands, nestle)
