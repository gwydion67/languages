import re

name = input("what's you name? ").strip()

# if ',' in name:
#     last,first = name.split(', ')
#     name = f"{first} {last}"

matches = re.search(r"(^.+), *(.+)$" , name)
if matches : 
    #last, first = matches.groups()   or
    last = matches.group(1)
    first = matches.group(2)
    name = f"{first} {last}"
print(f"hello {name}")

url = input("URL: ").strip()
matches = re.search(r"^(https?://)?(www\.)?twitter\.com/(.+)$",url , re.IGNORECASE)
if matches:
    print(f"username: {matches.group(3)}")