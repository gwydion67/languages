package main

import (
	"fmt"
	"strconv"
)

func main() {
	var i float32 = 42
	fmt.Printf("%v,%T \n", i, i)

	var j int
	j = int(i)

	fmt.Printf("%v,%T \n", j, j)

	var k string
	k = string(rune(j))
	fmt.Printf("%v,%T\n", k, k)

	k = strconv.Itoa(j)
	fmt.Printf("%v,%T", k, k)

}
