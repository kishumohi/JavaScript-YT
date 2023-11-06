const prompt = require('prompt-sync')();
let salary = prompt("Enter Value Here :- ");
salary = Number.parseInt(salary);

// console.log(typeof salary);

if (salary <= 50000) {
    console.log(`${salary} Salary is Below then 50000`);

} else if (salary == 25000) {
    console.log(`Salary is ${salary}`);

} else {
    console.log("Error");
}



// < 0 to 49999
// <= 0 to 50000