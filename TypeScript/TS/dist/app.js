// #1
var userFoodInput = prompt("What's your favorite food?");
// alert(`wow! ${userFoodInput} is my favorite to!`);
if (userFoodInput) {
    alert("Awoseme! " + userFoodInput + " is my favorite food too!");
}
else
    alert("No input provided.");
//////////////////////////////////////////////////////////////
// #2
alert("Let's calculate some numbers! Addition, devide and Right angle triangle calculation :)");
var numInput1 = Number(prompt("Enter any number :)"));
var numInput2 = Number(prompt("another one pls! ;)"));
var sumOfAmount = numInput1 + numInput2;
var sumOfDevide = numInput1 / numInput2;
var calcHypotenous = Math.sqrt(Math.pow(numInput1, 2) + Math.pow(numInput2, 2));
if (sumOfAmount) {
    alert("And summry it equiles to... -" + sumOfAmount + "-");
}
else
    alert("No input provided.");
if (sumOfDevide) {
    alert("Devide is equiles to... -" + sumOfDevide + "-");
}
else
    alert("No input provided.");
if (calcHypotenous) {
    alert("1st perpendicular is " + numInput1 + " 2nd perpendicular is " + numInput2 + " and hypotenous is " + calcHypotenous + "!");
}
else
    alert("Ughhh you try to piss me out...");
/*
// #1
const userFoodInput = prompt("What's your favorite food?");

alert("wow! " + userFoodInput + "is my favorit to!");

// #2
const numInput1 = Number(prompt("Enter first number"));
const numInput2 = Number(prompt("Enter second number!"));

alert(numInput1 + numInput2)
*/ 
