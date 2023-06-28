package main

import (
	"fmt"
)

func main() {
	const myConst int = 42
	fmt.Println(myConst)

	//const val float64 = math.Sin(1.57) // error the value of sin is not a constant as it is computed on compile time

	//! A const inside a function a constant with same name outside the function scope

}
