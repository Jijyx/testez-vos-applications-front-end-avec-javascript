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

from test_connexion import LoginPage
from test_page_capteurs import PageCapteurs
from test_capteur7 import PageCapteursDetails

class TestProjet (unittest.TestCase):

    def setUp (self):
        self.driver = webdriver.Firefox()
        self.vars = {}
    
    def tearDown(self):
        self.driver.close()

    def test_login_page(self):
        pageLogin = LoginPage(self.driver).open_page()
        pageLogin.open_page().enter_email("thomas@facadia.com").enter_password("azerty").submit() 
        self.assertEqual (self.driver.current_url, "http://127.0.0.1:5500/#/home")

    def test_titre_capteur(self):
        pageLogin = LoginPage(self.driver).open_page()
        pageLogin.open_page().enter_email("thomas@facadia.com").enter_password("azerty").submit() 
        page_capteurs = PageCapteurs(self.driver)
        self.assertEqual (page_capteurs.get_title(), "Vos capteurs")

    def test_titre_capteur_7(self):
        # On lance la page et s'y connecte 
        pageLogin = LoginPage(self.driver).open_page()
        pageLogin.open_page().enter_email("thomas@facadia.com").enter_password("azerty").submit() 
        # On va sur la page des capteurs
        page_capteurs = PageCapteurs(self.driver)
        # On clique sur un capteur (ici le 7)
        page_capteurs.get_details()
        # On vérifie que l'on est bien sur la page des détails du capteur 7
        self.assertEqual (self.driver.current_url, "http://127.0.0.1:5500/#/facade-details")
        page_capteurs_details = PageCapteursDetails(self.driver)
        self.assertEqual (page_capteurs_details.test_capteur7(), "Détails du capteur #7")