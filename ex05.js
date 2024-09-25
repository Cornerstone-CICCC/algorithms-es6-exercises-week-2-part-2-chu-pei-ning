// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 5, 65, 23, 3, 10]
const isNumsEven = numbers.some( number => number % 2 === 0)
console.log(isNumsEven)