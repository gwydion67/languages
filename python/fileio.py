#name = input("Name: ")
#
#file = open("textfile.txt" , "a") #
#file.write(f"{name}\n")
#file.close()
#
## another way of doing this with opening and closing is:
#
#with open("textfile.txt" , "a") as file:
#    file.write("this is a new line \n")
#
## Reading the file
#lines = []
#with open("textfile.txt" , "r") as file:
#    #lines = file.readlines()
#    for line in file:
#        lines.append(line.rstrip())
#for line in sorted(lines):
#   print("hello ,", line.rstrip())
#
students = []
#
## using csv files
with open("students.csv") as file:
    for line in file:
        name, house = line.rstrip().split(",")
        student = {"name":name, "house": house}
        students.append(student)

def get_name(student):
    return student["name"]

for student in sorted(students, key = get_name , reverse = False):
    print(f"{student['name']} is in {student['house']}")
