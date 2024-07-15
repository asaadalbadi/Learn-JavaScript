/** Refernces I used for this file: 
 * https://javascript.info/ 
 * */ 
/* ************************************** 
String concatination 
 ****************************************/

//using other signs than + sign :
alert(6 - '2')// unlike + this will return 4 because it will convert string to number 
alert('6' - '2')//this also shows 4

//using the unary + sign (unary means one operand so ex : (  +x ) here we got operand x only) 
alert(+ "") //return 0 for empty string unary + sign when used do nothing but if encounter non-number it converts it to number 0 or 1
alert(+true)// true is 1 so it will return 1 if false it will return 0

//the prefix ( ++count ) and postfix ( count++ ) in-place operators:
let counter = 0
// they both do the exact same thing but here are the differnece between them summarized in 3 sitautions:
alert(++counter) // alerts 1, use it when you want increase value and use it immediatly           (situation 1)
counter = 0 
alert(counter++) //alerts 0, use it when you want to increament value and use its previous value  (situation 2)
counter = 0
counter++
++counter
alert(counter) //alerts 2, this is normarl sitaution where you dont use it immediatly so no effect  (situation 3)


/*****************************************
 * Conditional branching: if, '?'
 *****************************************/

//for the ternary we can do multiple ternary operators after the similcoln : an example below
let age = 20 
let ageCategory = (age > 60) ? "Senior" : (age > 18) ? "Youth" : "Baby" //so you can add as much as you want
alert (ageCategory)


/********************************************
 * Logical operators
 ********************************************/

//JavaScript has intrestingly special handling for logical operators so for the OR || 
//if it encounters true it returns first true value, if false it return the  last value 
alert(0||null) // returns las value null
alert(null || 0 || undefined)// returns last value undeifined
alert(0 || 3 || 7)// return first truth  value 3

//for AND && if it is truth it always return the last value 
//if first is false it will return the false value 
alert(1 && null && 2 && 0) //return null --> the first falsy value it encounters 
alert(1 && true && 5 && 2)// returns 2 --> the last vlaue from operands 
/*
NOTE: keep in mind AND && has higher precedence than OR ||
 */

/*****************************************
 * Nullish coalescing operator '??'
 *****************************************/

//simply (value1 ?? value2) means if value1 undefined or null let it value2 , otherwise keep it value1
let value1 = null
let value2 = "I am new"
let value3 = value1 ?? value2 // it will be value2 since value1 is null
alert(value3)// returns value3 which is "I am new"
/**
 * NOTE: both ?? and || will have the same result but ?? is only specfic to null / undefined where 
 * OR|| also includes false, 0 and "" 
 * Shortly: OR return first truthy value, Nullish returns first defined value 
 */

/*********************************************
 * The "switch" satatment
 *********************************************/

//idea is we type switch expression then check expressions in cases with a defualt case if no match
let x = 3
switch (x){
  case 1:
    alert("wrong 1!");
    break;
  case 3:
    alert("You got it!")
    break;
  case 6:
    alert("wrong 6!")
    break;
  default:
    alert("You Did Not Get It!")
}
/*
NOTE1: if you did not add break statemnts you will end pritning all the cases after the true case
Note2: you can group the cases those cases you can just type them like this:
case1:
case5:
case3:
  alert("something")
  break;
so if case 1, 5 or 3 any one of them will enter case 3 and alert whatever is there
*/