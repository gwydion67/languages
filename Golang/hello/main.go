package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
	var whatToSay string
	whatToSay = "GoodBye"
	fmt.Println(whatToSay)

	whatWasSaid, whatElse := saySomething()
	fmt.Println(whatWasSaid,whatElse)

}

func saySomething() (string,string) {
	return "something","else"
}
// we cannot have unused variables inside a function
// while in global scope there can be such variables