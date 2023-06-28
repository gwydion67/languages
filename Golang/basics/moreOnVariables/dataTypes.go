package main

import "fmt"

func main() {
	//boolean
	var n bool = false
	fmt.Printf("%v,%T", n, n)

	m := 1 == 2
	fmt.Println(m)

	//^ NUMERICS
	i := 42 // there are multiple int types that are b bit 32 bit etc..
	// these are treated as different data types cand cannot be operated together

	fmt.Printf("%v,%T\n", i, i)

	var i1 uint16 = 42
	fmt.Printf("%v,%T\n", i1, i1)

	//^ OPERATORS
	a := 10 // 1010
	b := 3  //0011

	fmt.Println(a & b)  // 0010
	fmt.Println(a | b)  // 1011
	fmt.Println(a ^ b)  // 1001
	fmt.Println(a & ^b) // 1000 //! ^ operator gives the 1s component of the number
	// AND NOT operator -> &^
	//^ -- BITSHIFTING
	a = 8               // 2^3
	fmt.Println(a << 3) //2^3 * 2^3 = 2^6
	fmt.Println(a >> 3) // 2^3 / 2^3 = 2^0

	//^ FLOATING POINT NUMBERS
	f := 3.14 // float 32 bydefault
	var f64 float64
	f = 13.7e72
	f = 2.1e14
	fmt.Println(f, f64) // for floating point numbers we do not have modulo operator
	// or the bitwise or bitshifting operators

	//^ COMPLEX NUMBERS

	var c complex64 = 1 + 2i
	c= complex(3,5);
	fmt.Printf("%v,%T\n", c, c) //  complex numbers have the 4 basic arithematic operators available to them
	// we can get real and imag parts using
	fmt.Println(real(c), imag(c))

	//^ STRING
	s := "this is a string"
	fmt.Println(s)
	fmt.Println(s[1])
	fmt.Println(string(s[1]))
	bytes := []byte(s)
	fmt.Println(bytes)

	//^ RUNE
	r := 'a'
	fmt.Printf("%v,%T\n", r, r) // runes can read UTF32 characters
	// runes are just an alias for int32
}
