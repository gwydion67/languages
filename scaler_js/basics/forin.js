// for in loop allows up to loop through the properties of an objest 

var color = {
    primary: "Blue",
    secondary: "red", 
    teriary: "white"
}

for( var col in color){
    console.log(color[col]);
}

// for in loops can also be used for arrays

var array = ['yellow', 'green', 'orange'];
console.log("\n");
for (var col in array){
    console.log(array[col]);
}

///FOR OF loop
//for of statement creates a loop iterating over interable objects
//including stirings arrays array-like objects like nodelist, map and set

// the difference between forin and for of loop is the the for in loop loops over the keys of the object while for of loops direnctly over the elements of the array

// we can also get indexes in the array using 

for (var [index, col] of array.entries())
{
    console.log(index + '->' + col);
};

