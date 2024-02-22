# What Are High Order Array Methods?

Most of the challenges that we have done so far have used loops. Loops are one of the biggest fundamentals in computer science in general. It's important that you know how to use them. For the next batch of challenges, I want to utilize some of the high order array methods in JavaScript, such as `map` and `filter`. These methods are very useful and can help you write cleaner code. Using loops is usually a bit more efficient, but the difference is negligible unless you are dealing with a very very large data set. In everyday code, it's better to write clean code that is easy to read and understand.

Most of you probably know what high order array methods are, but I just want to quickly go over some of the common ones before we jump into the challenges.

A high order array method is a method that takes in a function as an argument or returns a function as a result. The most common high order array methods are `map`, `filter`, and `reduce`. There are a few others, but these are the ones that I use the most. They allow us to iterate over an array and perform some sort of operation on each element.

Let's use the following array for our examples:

```js
const numbers = [1, 2, 3, 4, 5];
```

## Map

The `map` method takes in a function as an argument and returns a new array with the result of calling the function on each element in the array. Here is an example:

```js

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]
```

In the example above, we have an array of numbers. We call the `map` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns the number multiplied by 2. The `map` method then returns a new array with the result of calling the function on each element in the array.

In this example I multiplied each number by 2, but you can do whatever you want in the function.

## Filter

The `filter` method takes in a function as an argument and returns a new array with all the elements that pass the test implemented by the function. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// Output: [2, 4]
```

In the example above, we have an array of numbers. We call the `filter` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns `true` if the number is even and `false` if the number is odd. The `filter` method then returns a new array with all the elements that pass the test implemented by the function.

Again, in this example I filtered out all the odd numbers, but you can do whatever you want in the function.

## Reduce

The `reduce` method takes in a function as an argument and returns a single value. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum);

// Output: 15
```

In the example above, we have an array of numbers. We call the `reduce` method on the array and pass in a function as an argument. The function takes in two arguments, `total` and `num`. The `total` argument is the value that we are accumulating. The `num` argument is the current value in the array. The function returns the sum of the `total` and `num`. The `reduce` method then returns a single value.

The provided code calculates the sum of all the numbers in the `numbers` array using the `reduce()` method in JavaScript. Here's a breakdown of how it works:

1. **Initialization**: The `reduce()` method starts with an initial value of `0` (specified as the second argument to `reduce()`).

2. **Iteration**: For each element in the `numbers` array, the arrow function `(total, num) => { return total + num; }` is called. The `total` parameter accumulates the sum of the elements, and `num` represents the current element being processed.

3. **Accumulation**: Inside the arrow function, `total + num` calculates the sum of the current `total` and the current `num`.

4. **Return Value**: The result of each iteration is passed to the next iteration until all elements in the array are processed. Finally, the calculated sum is returned as the result of the `reduce()` method.

5. **Output**: The calculated sum is then logged to the console.

The output `15` is the sum of all the numbers `[1, 2, 3, 4, 5]`, as expected. The `reduce()` method is a powerful tool for performing calculations on arrays and is commonly used for tasks like summing elements, finding maximum/minimum values, or flattening arrays.

## forEach

The `forEach` method takes in a function as an argument and executes the function on each element in the array. Here is an example:

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});

// Output: 1 2 3 4 5
```

In the example above, we have an array of numbers. We call the `forEach` method on the array and pass in a function as an argument. The function takes in a number as an argument and logs the number to the console. The `forEach` method then executes the function on each element in the array.

Here are some other high order array methods that you might see:

- `some` - returns `true` if at least one element in the array passes the test implemented by the function
- `every` - returns `true` if all elements in the array pass the test implemented by the function
- `find` - returns the value of the first element in the array that passes the test implemented by the function
- `findIndex` - returns the index of the first element in the array that passes the test implemented by the function
- `sort` - sorts the elements in the array
- `reverse` - reverses the order of the elements in the array
- `includes` - returns `true` if the array contains a certain element


# Common Array Methods in JavaScript

JavaScript provides several array methods that allow you to perform various operations on arrays. Here are explanations of some commonly used array methods:

### 1. `some()` Method:

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns `true` if any element satisfies the condition, otherwise it returns `false`.

**Syntax:**
```javascript
array.some(callback(element, index, array), thisArg)
```

- `callback`: A function that accepts up to three arguments: the current element, its index, and the array itself.
- `thisArg` (Optional): An object to which `this` keyword can refer in the callback function.

### 2. `every()` Method:

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns `true` if every element satisfies the condition, otherwise it returns `false`.

**Syntax:**
```javascript
array.every(callback(element, index, array), thisArg)
```

- `callback`: A function that accepts up to three arguments: the current element, its index, and the array itself.
- `thisArg` (Optional): An object to which `this` keyword can refer in the callback function.

### 3. `find()` Method:

The `find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.

**Syntax:**
```javascript
array.find(callback(element, index, array), thisArg)
```

- `callback`: A function that accepts up to three arguments: the current element, its index, and the array itself.
- `thisArg` (Optional): An object to which `this` keyword can refer in the callback function.

### 4. `findIndex()` Method:

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.

**Syntax:**
```javascript
array.findIndex(callback(element, index, array), thisArg)
```

- `callback`: A function that accepts up to three arguments: the current element, its index, and the array itself.
- `thisArg` (Optional): An object to which `this` keyword can refer in the callback function.

### 5. `sort()` Method:

The `sort()` method sorts the elements of an array in place and returns the sorted array.

**Syntax:**
```javascript
array.sort(compareFunction)
```

- `compareFunction` (Optional): A function that defines the sort order. If omitted, the array is sorted lexicographically (alphabetically or numerically).

### 6. `reverse()` Method:

The `reverse()` method reverses the elements of an array in place and returns the reversed array.

**Syntax:**
```javascript
array.reverse()
```

### 7. `includes()` Method:

The `includes()` method determines whether an array includes a certain value among its elements, returning `true` or `false` as appropriate.

**Syntax:**
```javascript
array.includes(searchElement, fromIndex)
```

- `searchElement`: The element to search for in the array.
- `fromIndex` (Optional): The position in the array at which to begin the search. Default is `0`.

These are some of the commonly used array methods in JavaScript. They provide powerful functionality for working with arrays and manipulating their contents based on specific criteria.
```

You can copy this content into a `.md` file using a text editor or Markdown editor of your choice.