1) What is the difference between var, let, and const?
==> var, let, and const. Through this, we declare variables. can use 
var--> it was used for the first time as JS. Now we should ignore it. We can re-declare and Re-assign var value.
let--> We can't re-declare let, but can re-assign the value. Need to declare before the call. Normally, we use it when we need to change the base value.
const--> We can't re-declare and re-assign the value. Can't use before declaring as let.

2) What is the difference between map(), forEach(), and filter()?
map()--> make a function on an array and returns a new array.
forEach()--> make a function on an array, but does not return anything.
filter()--> filter some element from an array and return a new array.

3) What are arrow functions in ES6?
--> Arrow function is a shorter method to declare a function
   ex:
   // Normal Function
function add(a, b) {
  return a + b;
}
// Arrow Function
const add = (a, b) => a + b;

4) How does destructuring assignment work in ES6?
Destructuring is a feature of ES6 that provides an easy way to extract values ​​from objects or arrays directly into variables.

5) Explain template literals in ES6. How are they different from string concatenation?
Template literals are a feature of ES6 that is used to make writing strings easier and more dynamic.(``). We canm put ${variable} directly not need any + operator.
