# lists 
## list as similar to arrays in other languages


def printname(names):
    for i in names:
        print(i ,end =" ")
    print('\n')
    
names = ["a","b","c"]
printname(names)

names.append('last')
printname(names)

names.insert(1,"at_index1")
printname(names)

names.extend(["adds","a","list"])
printname(names)

# dictionaries

students = {
    "one" : "abhi",
    "two" : "aditya",
    "three" : "vishwas"
}

print(students, "\n" )

print(students["one"])

for student in students:
    print(student, students[student], sep=" ,")
    
    
# list of dictionaries

address = [
    {
        "road" : 9,
        "city" : 'a'
    },
    {
        "road" : 23,
        "city" : 'b'
    }
]

print(address)


# None = a special keyword to signify no value

nothing = None

print(nothing)