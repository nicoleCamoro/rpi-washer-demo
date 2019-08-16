import requests
from functions import setup, check_connection, toggle_lights
from time import sleep


setup()

while True:
    connection_status = check_connection()
    if connection_status:
        device_status = requests.get("https://smart-home-io-19.firebaseio.com/washer.json")

        if device_status.status_code == 200:
            toggle_lights(device_status.json())    
        else:
            print("request not ok")
            print(device_status.status_code)
        
        print("/n")
        sleep(0.5)