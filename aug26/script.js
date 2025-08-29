// variables and constants
let myVariable = 2;
console.log(myVariable);
myVariable = 2;
console.log(myVariable);

const myConstant = 'dog';
console.log(myConstant);

// strings and template literals
console.log('this is a string with "double quotes" in it');
console.log("this is a string with 'single quotes' in it");
console.log(`this string has myVariable in it...myVariable: ${myVariable}`);

// arrays
const myArray = ['dogs','cats','horses'];
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray);
myArray.push('birds');
console.log(myArray);

// objects
const classroom = { 
    building: 'ATLAS',
    room: 104
}
console.log(classroom.building);
console.log(classroom.room);
console.log(classroom.build);
classroom.build = 'ATLAS';
console.log(classroom.build);
console.log(classroom);

// conditionals
if(myVariable === 2) { 
    console.log('myVariable is 2');
} else {
    console.log('myVariable is not 2');
}

// while loops
let myWhileLoopVariable = 1;
while (myWhileLoopVariable < 5) {
    console.log(myWhileLoopVariable);
    myWhileLoopVariable++;
}

// for loops
for (let i = 1; i < 5; i++) {
    console.log(i);
}
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray);
}

// for-of
for (const animal of myArray) {
    console.log(animal);
}

// functions
function myLog(variable) {
    console.log(variable);
}
const addAndLog = (variable1,variable2) => {
    const addedVariables = variable1 + variable2;
    console.log(addedVariables);
};
const plusOne = input => input + 1;
const plusOneWithExtraSyntax = (input) => {
    return input + 1;
};
const plusOneAndLog = input => {
    console.log(input + 1);
}

// for each
myArray.forEach(animal => console.log(animal));
myArray.forEach(myLog);
myArray.forEach(plusOneAndLog);

 // iife - immediate invoked function expressions
 (function(){ 
    console.log("abc");
 })();
 (() => {
    console.log("def");
 })

 // DOM queries
 const mySpecialListItem = document.getElementById(mySpecialListItem);
 console.log(mySpecialListItem);

 const myListItems = document.getElementsByClassName("listItem");
 console.log(myListItems);

 listItemsQuerySelected = document.querySelectorAll(".listItem");
 console.log(myListItemsQuerySelected);

 const myH1 = document.querySelectorAll("h1");

 firstListItem = document.querySelector(".listfirstItem:first-child");

 // element attributes - non CSS property, href for link or image
 console.log(firstListItem.textContent);
 firstListItem.textContent = `myVariable: ${myVariable}`;
 
 myH1.style.backgroundColor = "#ff0000";

 // event listeners
 myH1.addEventListener('click', () => {
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    myH1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

 });