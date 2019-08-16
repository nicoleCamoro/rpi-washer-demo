from config import PURPLE, YELLOW, RED, WIFI_NAME, WIFI_PASSWORD
from time import sleep
from signal import pause
import subprocess


def setup():
    
    PURPLE.on()
    sleep(1)
    PURPLE.off()
    sleep(1)

    YELLOW.on()
    sleep(1)
    YELLOW.off()
    sleep(1)

    RED.on()
    sleep(1)
    RED.off()

def connect_wifi():
    
    allSSID = cell.all('wlan0')
    print(allSSID)
    my_ssid = "Cell(ssid=" + WIFI_NAME + ")"
    
    for i in range(len(allSSID)):
        if str(allSSID[i]) == myssid:
            myssidA = allSSID[i]
            print(myssidA)
            
            break
        else:
            print("Not your wifi")
            
    myssid = Scheme.for_cell('wlan0', 'home', myssidA, WIFI_PASSWORD)

def check_connection():
     # check if device is connected to a network
    
    ps = subprocess.Popen(['iwgetid'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    
    try:
        output = subprocess.check_output(('grep', 'ESSID'), stdin=ps.stdout)
        print(output)
        return output
    except subprocess.CalledProcessError:
        print("No wireless networks connected")
        connect_wifi()
        return False
    
def toggle_lights(firebase_response={}):
    
    if not firebase_response:
        return False
    
    # Turn on washer
    if firebase_response['OnOff']['on']:
        PURPLE.on()
        if firebase_response['RunCycle']['dummy']:
            YELLOW.on()
            sleep(0.1)
            YELLOW.off()
            sleep(0.1)
        else:
            YELLOW.off()
        
        if firebase_response['Toggles']['Turbo']:
              
            RED.on()
        else:
            RED.off()

    else:
        PURPLE.off()

    
    
    
        
    
    # Run washer
    #if firebase_response['RunCycle']['dummy']:
#        YELLOW.on()
#    else:
#        YELLOW.off()
    
