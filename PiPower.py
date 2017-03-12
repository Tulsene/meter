#!usr/bin/python

import subprocess
import time
import sys

duration = sys.argv[1]
count = 0
print ('start')
sys.stdout.flush()
subprocess.call(["sudo ./hub-ctrl","-h 0","-P 2","-p 0"])


if duration != 0:
    subprocess.call(["sudo ./hub-ctrl","-h 0","-P 2","-p 1"])
    
    while count < duration:
        count = count + 1
        time.sleep(1)
        print ('Charging for ', count, ' seconds')
	sys.stdout.flush()
    print('Charge ended')
    sys.stdout.flush()
    subprocess.call(["sudo ./hub-ctrl", "-h 0", "-P 2", "-p 0"])
