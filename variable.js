/*To create or declare a variable, we need a let or const keyword:

let is used for variables where the value will change.
const is used for variables where the value will stay constant.

let and const keywords.
Data types: Numbers, Strings, Boolean, Null, and Undefined.
Arithmetic operators: +, -, *, /.
% modulo operator finds the remainder of division between two numbers.
** exponent operator raises one number to the power of another number.*/

const name = "Mahak Rastogi";
const favcolor = "Black";
let currentlocation = "Lucknow";
let mood = "Soso";

console.log(name);
console.log(favcolor);
console.log(currentlocation);
console.log(mood);

mood = "Angry";
console.log(mood);

let companyName = "Becky Entertainment";
let foundingYear = 2025;
let isActive = true;
let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);

let fahrenheit = 33;
let celcius = (fahrenheit - 32) / 1.8;

console.log(celcius);

let mass = 60;
let height = 5;

let bmi = mass/(height**2);
console.log(bmi);

let earth_weight = 60;
let destination_weight = earth_weight * 0.38;

console.log("Your weight on Earth is " + earth_weight + " pounds.");
console.log("Your weight on Moon is " + destination_weight + " pounds.");