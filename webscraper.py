
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.relative_locator import locate_with
import json 
import selenium

driver = webdriver.Chrome(ChromeDriverManager().install())

# dnd.arkalseif.info scrape test to prove I can do this with Selenium
"""driver.get("https://dnd.arkalseif.info/spells/complete-arcane--55/blistering-radiance--491/index.html")

title =driver.find_elements(By.TAG_NAME, "h2")[1].text
description =driver.find_element(By.CLASS_NAME,"nice-textile").text
print(title)
print(description)

#Test that we can jsonify the scrape predictably
scrape_dict = dict()
scrape_dict["title"] = title
scrape_dict['description'] = description

# Saving File to  'test.json

with open('test.json', 'w') as file:
     json.dump(scrape_dict,file)
driver.close()"""

# We need a scraping function for each catagory of file

#Heritage scraping
driver.get("https://a5e.tools/rules/human")
titles =driver.find_elements(By.TAG_NAME, "h2")
sections =driver.find_elements(locate_with(By.TAG_NAME, "h2"))
subsections =driver.find_elements(locate_with(By.TAG_NAME, "h3").below(driver.find_element(By.CLASS_NAME, "Indent2")))
# First few sections can scrape age speec, and common features

for title in titles:
    print(title.text)
    #sub_section = driver.find_elements(locate_with().below(By.ID: "email"))
for section in sections:
    print(section.text)
    subsections = section.below(driver.find_element(By.CLASS_NAME, "Indent2"))
    for section in subsections:
        print(section.text)
#print(subsections.text)
"""print(subsections)
for section in subsections:
    print(section.text)"""
    

#heritage_features =  driver.find_elements(By.TAG_NAME, "input").below(By.ID: "email")
sections =['TRAITS','']

