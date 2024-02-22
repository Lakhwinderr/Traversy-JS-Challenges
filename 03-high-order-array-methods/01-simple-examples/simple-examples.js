const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const numbersIntoTwo = numbers.map(num => num*2);
console.log(numbersIntoTwo)

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const oddNumbers = numbers.filter(num => {
    return num%2 !== 0;
})

console.log(oddNumbers)

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const product = numbers.reduce((result, num) => {
    return result*=num;
}, 1)

console.log(product)
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach(num => console.log(num))

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findFirstEven = numbers.find(num => num%2 === 0)
console.log(findFirstEven)

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const checkGreaterThanFive = numbers.some(num => num > 5);
console.log(checkGreaterThanFive)
 

/**
 * every: Checks if all array elements satisfy a condition.
 */

const checkLessThanSix = numbers.every(num => num < 6)
console.log(checkLessThanSix)
