// ASSIGNMENT # 01 - ARRAYS - THURSDAY 9 TO 12 
// Question 1: Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
// OUTPUT:  [ 'apple', 'banana', 'mango', 'orange' ]
// Question 2: Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
// OUTPUT: [ 10, 20, 30, 40 ]
// Question 3: Access the third element of the fruits array and assign it to a variable named thirdFruit.
var thirdFruit = fruits[2];
console.log(thirdFruit);
// OUTPUT: mango
// Question 4: Change the second element of the numbers array to 25.
numbers[1] = 25;
console.log(numbers);
// OUTPUT: [ 10, 25, 30, 40 ]
// Question 5: Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log(fruits);
// OUTPUT: [ 'apple', 'banana', 'mango', 'orange', 'grape' ]
// Question 6: Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
var lastFruit = fruits.pop();
console.log(fruits);
// OUTPUT: [ 'apple', 'banana', 'mango', 'orange' ]
// Question 7: Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
var firstFruit = fruits.shift();
console.log(fruits);
// OUTPUT:  [ 'banana', 'mango', 'orange' ]
// Question 8: Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("kiwi");
console.log(fruits);
// OUTPUT: [ 'kiwi', 'banana', 'mango', 'orange' ]
// Question 9: Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
console.log(fruits);
// OUTPUT: [ 'kiwi', 'orange' ]
// Question 10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 3, "pineapple", "pear");
console.log(fruits);
// OUTPUT: [ 'kiwi', 'orange', 'pineapple', 'pear' ]
// Question 11: Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
// OUTPUT: [ 'kiwi', 'orange' ]
// Question 12: Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
// OUTPUT: [ 'pineapple', 'pear' ]
