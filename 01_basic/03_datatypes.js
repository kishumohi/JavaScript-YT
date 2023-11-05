/*
JavaScript has 8 Datatypes
1. String
2. Number

3. Bigint
    -   let x = BigInt("123456789012345678901234567890");

4. Boolean
        let x = 5;
        let y = 5;
        let z = 6;
        (x == y)       // Returns true
        (x == z)       // Returns false
        
5. Undefined
        let Animal;    // Value is undefined, type is undefined
        let car = "";    // The value is "", the typeof is "string"
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
    const cars = {_:"_"};
2. An array
    const cars = [];
3. A date
ter
*/
let animalname = "Animal";
// console.log(animalname);
// console.log(typeof animalname);

let num = 98;
// console.log(typeof num);

let bignum = BigInt("123456789012345678901234567890");
// console.log(bignum);

let bignumnum = 123456789012345678901234567890;
// console.log(bignumnum);

let x = "5";
let y = 5;
// let z = 6;
// console.log(typeof x);
// console.log(typeof y);

// console.log(x === y);       // Returns true

// console.log(x == z);       // Returns false

let Animal;    // Value is undefined, type is undefined
// console.log(Animal);

let car = "";    // The value is "", the typeof is "string"
// console.log(car);

let abcd = null;
// console.log(abcd);

let a = Symbol("Hello"); // unique value
let b = Symbol("Hello"); // unique value

// let a = ("Hello");
// let b = ("Hello");

console.log(a == b);
