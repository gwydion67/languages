
def func() :
    name = input("What's you name? \n");
    print(f"hello {name}")
    print("hello," , name)
    
    

#### func();

'''
multi line comment
'''

# change the print endline
# print total params:: print(*object, sep = ' ' , end = '/n' , file = sys.stdout, flush = False)

print("this is print with " , end = "")
print("no new line")

#! String methods
string = input("input a string \n");
hold = string

# remove leading and preceding whitespaces from the string
string = string.strip();
print(string)

# capitalize the first letter
string = string.capitalize();
print(string)

# capitalize first letters of all words
string = string.title();
print(string)

string = hold;

# cascading methods
string = string.strip().capitalize();
print(string)

## this can also be used along the input like input("xyz").strip().capitalize()

##! Integer

x = input("enter x ")
y = input("enter y ")

#z = x + y #* this concatenates two numbers as strings

z = int(x) + int(y)

## we could also int(input()) to directly input as integer

print(z)


## print integer with formating

print(f"{z:,}")

## round till nearest integer with some precision z = round(x+y,<number of digits after decimal>) 
## we could also do print(f"{z:.2f}")
