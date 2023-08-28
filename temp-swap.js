let  first = 5;
let second = 7;
let third = 10;
console.log(first, second, third);


// const temp = first;
// const temp2 = second;

// first = third;
// second = temp;
// third = temp2;

[first, second, third] = [third, second, first]
console.log(first, second, third);