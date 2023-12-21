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

class LoginPage:

  def __init__(self, driver):
    self.driver = driver

  def open_page (self):
    self.driver.get("http://127.0.0.1:5500/")
    return self

  def enter_email(self, email):
    self.driver.find_element(By.ID, "user-email").click()
    time.sleep(1)
    self.driver.find_element(By.ID, "user-email").send_keys(email)
    return self

  def enter_password(self, password):
    self.driver.find_element(By.ID, "user-password").send_keys(password)
    return self

  def submit(self):
    element = self.driver.find_element(By.CSS_SELECTOR, ".submit-btn")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, ".submit-btn").click()

  
