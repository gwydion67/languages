package main

import (
	"fmt"
)


type User struct{
  FistName string
  LastName string
}

func main() {
	var myString string
	var myInt int

	myString = "HI"
	myInt = 11

	mySecondString := "another strin"

	fmt.Println(myInt, mySecondString, myString)

	//var myMap map[string]string

	myMap := make(map[string]User)

	// myMap["dog"] = "tommy"
	// myMap["cat"] = "meow"

	// fmt.Println(myMap, myMap["dog"])

  me := User{
    FistName: "abhishek",
    LastName: "kumar",
  }

  myMap["me"] = me

  fmt.Println(myMap)

  var mySlice []string
  mySlice = append(mySlice, "2")

}
