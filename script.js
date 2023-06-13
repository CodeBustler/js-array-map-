// Task 1: Increment by One
// Write a function that takes an array of numbers and returns a new array with each number incremented by one. For example, if the input array is [1, 2, 3], the output should be [2, 3, 4].

let number = [1, 2, 3];
let newNumbers = number.map((num) => num + 1);
console.log(newNumbers); //[2, 3, 4]

//Task 2: Convert to Uppercase
//Write a function that takes an array of strings and returns a new array with each string converted to uppercase. For example, if the input array is ["apple", "banana", "cherry"], the output should be ["APPLE", "BANANA", "CHERRY"].

let fruits = ['apple', 'banana', 'cherry'];
let capitalFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalFruits); //["APPLE", "BANANA", "CHERRY"]

// Task 3: Calculate Square
// Write a function that takes an array of numbers and returns a new array with the square of each number. For example, if the input array is [2, 3, 4], the output should be [4, 9, 16].

let nums = [2, 3, 4];
let sqrtArr = nums.map((num) => num * num);
console.log(sqrtArr);

// Task 4: Extract First Letter
// Write a function that takes an array of names and returns a new array with the first letter of each name extracted. For example, if the input array is ["John", "Alice", "Bob"], the output should be ["J", "A", "B"].

let names = ['John', 'Alice', 'Bob'];
let firstLetter = names.map((name) => name.charAt(0));
console.log(firstLetter);

// Task 5: Calculate Length
// Write a function that takes an array of strings and returns a new array with the length of each string. For example, if the input array is ["apple", "banana", "cherry"], the output should be [5, 6, 6].

let fruits2 = ['apple', 'banana', 'cherry'];
let fruitLength = fruits2.map((fruit) => fruit.length);
console.log(fruitLength);

// Task 6: Filter Positive Numbers
// Write a function that takes an array of numbers and returns a new array with only the positive numbers. For example, if the input array is [-2, 0, 5, -10, 7], the output should be [5, 7].

function filterNums(numbers) {
  return numbers.filter((num) => num > 0);
}

let numbers2 = [-2, 0, 5, -10, 7];
let positiveNums = filterNums(numbers2);
console.log(positiveNums);
