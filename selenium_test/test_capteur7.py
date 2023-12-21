# Generated by Selenium IDE
import unittest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class PageCapteursDetails():
  
  def __init__(self, driver): 
    self.driver = driver
  
  def test_capteur7(self):
    time.sleep(2)
    element = self.driver.find_element(By.CSS_SELECTOR, ".section-title")
    return element.get_attribute("innerText")
   