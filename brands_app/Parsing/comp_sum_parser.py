from bs4 import BeautifulSoup
import urllib.request
from .models import Politician, Company, Donation, Lobbyist

companies = Company.objects.all()
open_secrets_key = 'edc22e5b2f7a4e1f701ef86da3976e6b'

class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"
    
opener = AppURLopener()

def add_lobbying_to_comps(companies=companies, year='2019'):
    for company in companies:
        try:
            resp = opener.open('https://www.opensecrets.org/federal-lobbying/clients/lobbyists?cycle=' + year + '&id='+ company.cid)
            webpage = resp.read()
            soup = BeautifulSoup(webpage, 'html.parser')
            tbody = soup.find('tbody')
            rows = tbody.find_all('tr')
            for row in rows:
                lobbyist_name = row.find('td').get_text()
                amount = row.find_all('td')[1].get_text().split('$')[1].replace(',','')
                try:
                    lobbyist = Lobbyist.objects.get(name=lobbyist_name)
                except:
                    lobbyist = Lobbyist(name=lobbyist_name)
                    lobbyist.save()
                donation = Donation(lobbyist=lobbyist, total=int(amount), cycle=year)
                donation.save()
                company.donations.add(donation)
                print(company.name,' has given $', company.lobbying_total_year(), ' in ', year)
        except:
            print("This " + company.name + " has no records!")
            """
            data_table = soup.find_all(id='client_itemized')
            for table in data_table:
                tds = table.find_all('td')
                tds[:] = [td for td in tds if '>-<' not in str(td)]
                tds[:] = [td for td in tds if '>  <' not in str(td)]
                tds[:] = [td for td in tds if '<td></td>' not in str(td)]
                for td in tds:
                    if tds.index(td) % 2 == 0:
                        try:
                            lobbyist_name = td.get_text()
                            amount = tds[tds.index(td)+1].get_text().split('$')[1].replace(',','')
                            print("This Lobbying group: ", lobbyist_name , 'received this ammount $', amount, 'from ', company)
                            try:
                                lobbyist = Lobbyist.objects.get(name=lobbyist_name)
                            except:
                                lobbyist = Lobbyist(name=lobbyist_name)
                                lobbyist.save()
                            donation = Donation(lobbyist=lobbyist, total=int(amount), cycle=year)
                            donation.save()
                            company.donations.add(donation)
                        except:
                            print(company.name,' has given $', company.lobbying_total_year(), ' in ', year)"""
                        
                
def add_politician_donations_to_comps(companies=companies, year='2018'):
    for company in companies:
        try:
            resp = opener.open('https://www.opensecrets.org/orgs/recips.php?id=' + company.cid + '&cycle=' + year + '&state=&party=&chamber=&sort=A&page=1')
            webpage = resp.read()
            soup = BeautifulSoup(webpage, 'html.parser')
            table = soup.find(id="tab")
            pages = len(table.find_all('a'))
            if pages != 0: #On Coca Cola Should equal 3
                for page in range(pages):
                    resp = opener.open('https://www.opensecrets.org/orgs/recips.php?id=' + company.cid + '&cycle=' + year + '&state=&party=&chamber=&sort=A&page=' + str(page+1))
                    webpage = resp.read()
                    soup = BeautifulSoup(webpage, 'html.parser')
                    table = soup.find(id="tab")
                    table_body = table.find("tbody")
                    rows = table_body.find_all("tr")
                    for row in rows:
                        politician_named = row.find('td').get_text()
                        politician_name = politician_named.split()[1] + ' ' + politician_named.split(',')[0]
                        amount = row.find_all('td')[2].get_text().split('$')[1].replace(',','')
                        try:
                            politician = Politician.objects.get(name=politician_name)
                        except:
                            politician = Politician(name=politician_name)
                            politician.save()
                        donation = Donation(politician=politician, total=int(amount), cycle=year)
                        donation.save()
                        company.donations.add(donation)
                        print(company.name,' has given $', company.politicians_total_year(), ' in ', year)
            else:
                resp = opener.open('https://www.opensecrets.org/orgs/recips.php?id=' + company.cid + '&cycle=' + year + '&state=&party=&chamber=&sort=A&page=1')
                webpage = resp.read()
                soup = BeautifulSoup(webpage, 'html.parser')
                table = soup.find(id="tab")
                table_body = table.find("tbody")
                rows = table_body.find_all("tr")
                for row in rows:
                    politician_named = row.find('td').get_text()
                    politician_name = politician_named.split()[1] + ' ' + politician_named.split(',')[0]
                    amount = row.find_all('td')[2].get_text().split('$')[1].replace(',','')
                    try:
                        politician = Politician.objects.get(name=politician_name)
                    except:
                        politician = Politician(name=politician_name)
                        politician.save()
                    donation = Donation(politician=politician, total=int(amount), cycle=year)
                    donation.save()
                    company.donations.add(donation)
                    print(company.name,' has given $', company.politicians_total_year(), ' in ', year)
        except:
            print("This " + company.name + " has no records!")