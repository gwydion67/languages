import random


## variables and functions
# player_choice = "rock" # this is variable
# computer_choice = "paper"

## function
def greeting():
    return "hi"

def get_choices():
    player_choice = input("Enter a choice (rock, paper, scissors) \n")
    options = ["rock" , "paper" , "scissors"]
    computer_choice = random.choice(options)
    
    choices = {
        "player" : player_choice,
        "computer" : computer_choice
    }
    
    return choices;

## if else
## print concat and format => print(f"..")
def check_win(player, computer):
    if(player == computer):
        return ("It's a tie!")
    print("you chose " + player + f" computer chose {computer}")
    
    if(player == "rock"):
        if(computer == "scissor"):
            print("you win")
        else:
            print("you lost")
    elif(player == "paper"):
        if(computer == "rock"):
            print("you win")
        else: 
            print("you lost")
    elif(player == "scissor"):
        if(computer == "paper"):
            print("you win")
        else:
            print("you lost")
            

print(greeting());

choice = get_choices();
# print(choice);

check_win(choice["player"] , choice["computer"])

## dictionary

# dict = {
#     "name" : "beau",
#     "color" : choice
# }

# # List
# food = ["pizza" , "carrots" , "eggs"]
# dinner = random.choice(food);

## type conversion
age = "20"
print(type(age))
age = int(age)
print(type(age))

## some logics and falsy

# 0/-ve  => False
# +ve => True
# print(False, "hello") # hello
# print("hi" , "hello") # hi
# [] => False

#! or in python works like : first value if is is true else second value
#! for 'and' : if first value if false then first value else 2nd value

## String

## multi line string
print(""" Hello
      I am 
      
      Abhishek Kumar
    """)
print("abhishek".upper())

print("abHiShek".lower())
print("abhishek".title())

print("abhishek".isalpha())
