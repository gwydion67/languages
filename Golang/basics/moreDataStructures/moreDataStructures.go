package main

import (
	"fmt"
)

func main() {
	var myString string
	var myInt int

	myString = "HI"
	myInt = 11

	mySecondString := "another strin"

	fmt.Println(myInt, mySecondString, myString)

	//var myMap map[string]string

	myMap := make(map[string]string)

	myMap["dog"] = "tommy"
	myMap["cat"] = "meow"

	fmt.Println(myMap, myMap["dog"])

}
