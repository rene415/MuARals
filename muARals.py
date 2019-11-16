
#installing packages
import sys 
from bs4 import BeautifulSoup
import requests
import json


#Collecting the page
page = requests.get('https://freedomarchives.org/La_Lucha_Continua/Martin_Luther_King.html')
print(page)
soup = BeautifulSoup(page.text, 'html.parser')


text = str(soup.find_all('strong'))
text = text.replace("<strong>","")
text = text.replace("</strong>","")

my_dict = {
    "person" : "Martin Luther King Jr",
    "message" : text
}
print(my_dict)

d = json.dumps(my_dict)
print(d)

