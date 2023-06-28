package main

import (
	"log"
	"time"
)

var s = "seven"

var firstName string
var lastName string
var phoneNumber string
var age int
var birthdate time.Time

type User struct {
	FirstName string
	LastName  string
	Age       int
	BirthDate time.Time /// capital variable names are availabe to other programs of the package

}

/// functions for structs

func (m *User) getName() string {
	return (m.FirstName + m.LastName)
}

func main() {

	// var s2 = "six"

	// log.Println("s is ", s)
	// log.Println("s2 is ", s2)

	// newvar1, newvar2 := saySomething("xxx")
	// log.Println(newvar1,newvar2);

	//////////////////////////////////////

	user := User{
		FirstName: "abhishek",
		LastName:  "kumar",
	}
	user.FirstName = "Abhishek"
	log.Println(user.FirstName, user.LastName)
	log.Println(user.BirthDate)
	// log.Println(user.xyz) //error
	user.getName()

}

// func saySomething(s3 string) (string, string) {
// 	log.Println("s3 is", s3)
// 	return s, "world";
// }
