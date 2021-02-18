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
var myName ()
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined
// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john
// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob
// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* Datatypes*/
//1. You can also insert numbers//
var myNumber (5)
// 2. You can use strings to complete full sentences using variables and numbers//
console.log ("Trey" + ' ' + "is" + ' ' + "the" + ' ' + "goat")
//Remember that in strings, spaces are counted as their own character. If you want a space, you can either add spaces in front or after a word in the string or you can add them individually//
//3. Booleans are a binary variable that has two possible values call "true" or "false"//
boolean gokuIsStronger = True
boolean narutoIsStronger = False
//4. Array are used to make lists//
var myArray = ['Manga', 'anime', 'videgames']
//5. Functions are reusable blocks of code that accept inputs, process those inputs, and returns a new data value//
function name(parameter){
  <function body>
  <function body>
  return statement
}
//6. Undefined properties indicates that a variable has not been assigned a value, or not declared at all//

//7. NaN properties mean "Not-a-Number".

//8. Infinity is when a number exceeds 1.797693134862315E+308. -Infinity would be the negative values of this.

//9. The difference between primitive/simple datatypes and complex datatypes is how optimal they are. As you would guess, primitive datatypes are much more optimal than complex datatypes. However, complex datatypes have much more uses than primitive datatypes.

/*Operators*/
//1. Assignment operators assign values to its left operand based off of the right operand
x=y
x+=y
x-=y
x*=y
x/=y
x%=y
//2. Arithmetic operators are symbols used to do equation
x + y
x - y
x * y
x / y
x % y
//3. Comparison operators are used to compare two values
x == y //equal
x != y //not equal
x === y //strcitly equal
//4. Logical operators are usually used with logical boolean values. When they are, it returns a boolean value. When used with a non-boolean value, the operators return non-boolean values.
//|| = OR
//&& = AND
//! = NOT
(x < 10 && y > 1) // true
(x == 5 || y == 5) // false
!(x == y) //true
/*String Manipulation*/
//1. With operators
"Walter" === ("the " + "greatest")
//2. With string methods
"walter" / ("the " + "greatest")
/*Control flow*/
//1. if statements are statements that use "if" to check for a specific condition
if (hour < 11) {
  "Good morning"
}
console.log ('this code ran')
//2. else if statements are if statements that have an additional else statement, which specifies a ne condition if first condition is false
if (hour < 11) {
  greeting = "Good morning"
} else if (hour < 24){
 greeting = "Good afternoon"
}
//3. else statements that specify a block of code to be executed if the condition is false
if (hour < 11) {
  greeting = "Good morning"
} else if (hour < 24){
 greeting = "Good afternoon"
} else{
  gretting = "Good evening"
}
/*Loops*/
//1. While loops are loops that repeat a specific blosck of coding, as long as the condition is true
while (i < 9) {
  text += "The number is " + i;
  i++;
}
// For loops are loops that repeat a block of coding, regardless on true or false
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
//2. Forward counting
for (var myCounting = 0; myCounting < 100; myCounting++){
  console.log (Ruler);
}
// Backwards counting
for (var countingBack = 100; countingBack > 0; countingBack-+){
  console.log(Metric)
}
/*Functions*/
//1. The two phases to using functions: First we must name the function. Next we can execute a function by naming the parameters.
//2.  A function's parameters describes the limit that functions can go to.
//3. The syntax for a named function is "function_name"
//4. How do we assign a function to a variable?
var myFunction = function(/*name of function*/){
  //some piece of code
}
//5. You specify the inputs and outputs by adding parameters that state what should and shouldn't be an input or output