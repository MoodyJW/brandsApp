# brandsAndCompanies

Work in progress app that allows users to login and make searches for brands.  Results will be the owner of the brand and any parent companies/subsidiaries.  Each company will also have an attached list of US politicians who they have donated money to.

Brands/companies scraped from Wikipedia and added to API built with Django REST Framework.  Legislator/donation information obtained through the Open Secrets API.  All of the donations are from individuals who work for the company and not directly from the company itself.