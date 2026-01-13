// If Statement 
//If the condition is true, then the statements within are executed. If the condition is false, then nothing happens and the program continues on after the if statement.

let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

/*Create a good-morning.js program that prints a message if it's early in the day.

Define an hour variable and give it the current time of day.

Write an if statement for the following:

If hour < 12, print “Good morning 🌞” and some of your morning routines.*/

let hour = 7;
if(hour<12){
  console.log("Good morning 🌞");
  console.log("Do Pooja");
}

//An else clause can be optionally added to the end of an if statement.
let hour2 = 14;
if(hour2<12){
  console.log("Good morning 🌞");
  console.log("Do Pooja");
}else{
  console.log("Good Afternoon");
}

//An else if clause can be added to an if statement to check multiple conditions.
let ph= 7;
if(ph>7){
  console.log("Basic");
}else if(ph<7){
  console.log("Acidic");
}else{
  console.log("Neutral");
}
