try :
    x = int(input("whats x? "))
except ValueError:
    print("x is not an integer")
# print(f"x is {x}") # x does not exist here because as soon as int() errors and exception is thrown
else:
    print(f"x is {x}")

# a different method so that the user is asked till current input
while True:
    try : 
        y = int(input("what is y : "))
    except:
        print("y is not an integer")
    else:
        break
print(f"y is {y}")


# we want to just ignore an exception we can do this by pass
while True:
    try : 
        z = int(input("what is z : "))
    except:
        pass 
    else:
        break
print(f"z is {z}")




