# Packages are third party libraries that we can import into our program
# Pypi.org consists a huge load of packages to use 

# we use package managers like pip that allow us to install these packages on our systems
#import cowsay
#import sys
#
#if len(sys.argv) == 2:
#    cowsay.cow("hello, " + sys.argv[1])

import json
import requests
import sys

if len(sys.argv) != 2:
    sys.exit("too few arguments")
response = requests.get("https://itunes.apple.com/search?entity=song&limit=50&term=" + sys.argv[1])
# print(json.dumps(response.json(),indent = 2))

# getting only the song name
obj = response.json()
for result in obj["results"]:
    print(result["trackName"])


