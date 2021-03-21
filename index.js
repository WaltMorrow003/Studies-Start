/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
//var myName ();//
var myName (Trey)
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
//console.log(myName); // prints => undefined
console.log(myName)
// 2. initialization or assignment //
/*myName = 'john';
console.log(myName); // prints => john */
myName = 'Trey'
console.log(myName)
// 3. re-assignment //
/*myName = 'bob';
console.log(myName); // prints => bob */
myName = 'Walter'
console.log(myName)
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
/* var myVariable = 1;
var myVariable = true;
myVariable = "someString"; */
var myVariable = 10
var myVariable = true
myVariable = "DBZ is a good anime"

//Control flow - A compact set of statements that can be used to incorporate a great deal of interactivity in an application
//If statements - Used to execute a logical statement if the statement is true
//Else statement - Used to execute a logical statement if the if statement returns as false
var test = 50
if (test >= 93){
  return "A"
} else{
  return "Failed"
}
//Else-if statements - The compound of the "if" and "else" statements; used to have multiple conditions tested in sequence
var myTest = 50
if (myTest >= 90){
  return "A"
} else if(myTest >= 80){
  return "B"
} else if(myTest >= 70){
  return "C"
}else if (myTest >= 60){
  return "D"
} else{
  return "F"
}

//Loops
//for loops - A loop that repeats until a certain cindition evaluates as false.
for (let i = 0; i >= 9001; i--)
//while loops - Executes its statements as long as a specified condition evaluates to true
var g = 9001
var v = 10000
while (g > 9000){
  g--;
  g < v
}

//Functions
//1. The two phases to using function: First we must define the function. Next, we must execute a function by returning it.
//declaration
function square(50){
  //execution
  return 50*50
}
//2. Parameters are passed to functions by value, while passed arguments changes the function's properties.
//3.
function/*type*/ name(parameter1, parameter2)
//.4
var i = 0
function random(i++){
  return i>=90
}
//5. We specify inputs and outputs by assigning each to show a different range of the function