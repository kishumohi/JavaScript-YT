//---------------------------------------------  classical for loop
let num = [3, 5, 6, 7, 8, 6];

// for (i = 0; i < num.length; i++) {
//   console.log(i);
/// }
//---------------------------------------------  for Each loops
// num.forEach((element) => {
//   console.log(element);
// });
//----------------------------------------------  array from
// let findnumber = "BBA Coder";
// let numfind = Array.from(findnumber);
// console.log(numfind);

//----------------------------------------------  for of loop  ===return array value
for (let i of num) {
  console.log(i);
}

//---------------------------------------------  for in loop   ===return array index
console.log("--------------------------------");
for (let i in num) {
  console.log(i);
}
