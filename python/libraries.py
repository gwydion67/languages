## directly importing everything
import random

## importing the required function only
from random import choice

result = random.choice(["heads","tails"])
print(result)

result = choice([1,2,3,4,5])
print(result)

number = random.randint(1,10)
print(number)



cards = ["jack","queen","king"]
random.shuffle(cards) # this is not returns the new array but suffles the existing array itself
for card in cards:
    print(card)

## command line arguments

import sys
#try :
#    print("hello, my name is", sys.argv[1]) # at index 0 it contains the name of the file
#except IndexError:
#    print("too few args")

## we could make this better by 

if len(sys.argv) < 2:
    # print("too few args")
    sys.exit("Too few args")
elif len(sys.argv) >2:
    #print("Too many args")
    sys.exit("Too many args")
#else:
    #print("hello my name is,",sys.argv[1])
print("hello my name is,",sys.args[1])

# for arg in sys.args[1:]
# for arg in sys.args[1:-1]


