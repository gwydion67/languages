package main

import "log"

func main() {
	var myString string = "Green"
	log.Println("mystring = ", myString)
	changeUsingPointer(&myString)
	log.Println("now myString = ", myString)
}
func changeUsingPointer(s *string) {
	*s = "newValue";
}
