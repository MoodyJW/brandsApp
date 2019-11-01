from bs4 import BeautifulSoup
import urllib.request
from .models import Politician, Company, Donation, Lobbyist

companies = Company.objects.all()
open_secrets_key = 'edc22e5b2f7a4e1f701ef86da3976e6b'

class AppURLopener(urllib.request.FancyURLopener):
    version = "Mozilla/5.0"
    
opener = AppURLopener()
companies = Company.objects.all()

def add_lobbying_to_comps(companies=companies, year='2019'):
        for company in companies:
            resp = opener.open('https://www.opensecrets.org/lobby/clientsum.php?id=' + company.cid + '&year=' + year)
            webpage = resp.read()
            soup = BeautifulSoup(webpage, 'html.parser')
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
                            print(company.name,' has given $', company.lobbying_total_year(), ' in ', year)
                        
                


