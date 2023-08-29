from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.by import By
from time import sleep
from selenium.webdriver.common.alert import Alert

def wait(driver,amount:float):
    driver.implicitly_wait(amount)
    sleep(amount)


driver = webdriver.Chrome()
wait(driver,1)
driver.get('http://localhost:4200/login')

inputEmail = driver.find_element(by=By.ID,value="email")
inputPassword = driver.find_element(by=By.ID, value="contrasena")

sleep(2)

driver.find_element(by=By.ID, value='botonEnviar').click()
print(Alert(driver).text)
sleep(0.5)
Alert(driver).accept()

sleep(1.5)
inputEmail.send_keys("mail@gmail.com")
sleep(0.5)
inputPassword.send_keys("contrasena123")
sleep(1.5)
driver.find_element(by=By.ID, value='botonEnviar').click()

assert "menu" in driver.current_url

inputNombre = driver.find_element(by=By.ID, value="nombre")
inputDni = driver.find_element(by= By.ID, value="dni")
inputVoto = driver.find_element(by=By.ID, value="voto")

sleep(1.5)
inputNombre.send_keys("Juancito")
inputDni.send_keys("12345678")
inputVoto.send_keys("messi")
sleep(1)
driver.find_element(by=By.ID, value='botonEnviarForm').click()

print(Alert(driver).text)
sleep(0.5)
Alert(driver).accept()
sleep(1.5)

driver.find_element(by=By.CLASS_NAME, value='botonLogout').click()

sleep(2)

driver.quit()