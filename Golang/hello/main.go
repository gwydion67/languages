package main

import "fmt"
import "os"


func main() {
	fmt.Println("Hello, World!")
	var whatToSay string
	whatToSay = "GoodBye"
	fmt.Println(whatToSay)

	whatWasSaid, whatElse := saySomething()
	fmt.Println(whatWasSaid,whatElse)

  fmt.Println(os.Args[1])

}

func saySomething() (string,string) {
	return "something","else"
}
// we cannot have unused variables inside a function
// while in global scope there can be such variables
