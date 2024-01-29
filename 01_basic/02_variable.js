/*
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.

Rules for Variable define in Java Script:

- Names can contain letters, digits, underscores, and dollar signs.        [ don't doller signs ]
- Names must begin with a letter.
- Names can also begin with $ and _ (but we will not use it in this tutorial).
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.
*/
// [1] var
var Animal = "Lion";
var Animal = "Tiger";

// Block Scope
{
  var Animal = "Beer";
  // console.log(Animal);
}

// console.log(Animal);

// [2] const
const authorName = "BBA Coder";
// console.log(authorName);

// [3] let
let authorName2 = "You-Tube";
authorName2 = "you";
// console.log(authorName2);
// Block Scope
{
  console.log(authorName2);
}
// --------------------------------------------
{
  let blockauthor = "Kishan";
  // console.log(blockauthor);
}
console.log(blockauthor);
console.log(blockauthor);
