const prompt = require("prompt-sync")();
let age = prompt("Enter Your Age here :- ");
age = Number.parseInt(age);

for (i = 0; i < age; i++) {
    switch (true) {
        case i % 3 == 0:
            console.log(`${i} Divisible by 3`);
            break;
        default:
            console.log(`${i} Not Divisible by 3`);
            break;
    }
}