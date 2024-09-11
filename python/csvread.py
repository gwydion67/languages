import csv

students = []
#
#with open ("students.csv") as file:
#    reader = csv.reader(file)
#    #for row in reader:
#    #   students.append({"name" : row[0] , "hone" : row[1]})
#    ### OR
#    for name,home in reader : 
#        students.append({"name" : name, "home" : home})
#      
with open("students.csv") as file:
    reader  = csv.DictReader(file)
    for row in reader:
        students.append({"name" : row["name"] , "home" : row["home"]})
        
        
for student in sorted(students, key = lambda student : student ["name"]):
    print(f"{student['name']} is from {student['home']}") 

name = input("whats you name? ")
home = input("where's you home? ")

with open("students.csv" , "a") as file:
   #writer = csv.writer(file)
    writer = csv.DictWriter(file,fieldnames=["name", "home"])
    writer.writerow([name,home])
    