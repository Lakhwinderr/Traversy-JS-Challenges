
# Truncating Numbers to Two Decimal Places in JavaScript

To truncate a number to two decimal places in JavaScript, you can use various methods. One common approach is to use the `toFixed()` method, which formats a number using fixed-point notation. Here's how you can truncate a number to two decimal places:

```javascript
let num = 10.123456;
let truncatedNum = num.toFixed(2);
console.log(truncatedNum); // Output: "10.12"
```

The `toFixed()` method converts the number to a string representation, rounding the number to the specified number of decimal places and padding with zeros if necessary.

However, it's important to note that `toFixed()` returns a string, not a number. If you need to perform further calculations with the truncated number, you may want to convert it back to a number using `parseFloat()` or `Number()`:

```javascript
let num = 10.123456;
let truncatedNumStr = num.toFixed(2); // "10.12"
let truncatedNum = parseFloat(truncatedNumStr);
console.log(truncatedNum); // Output: 10.12
```

Alternatively, you can use `Math.trunc()` or `Math.floor()` to truncate the number without rounding:

```javascript
let num = 10.123456;
let truncatedNum = Math.trunc(num * 100) / 100;
console.log(truncatedNum); // Output: 10.12

// or using Math.floor()

let truncatedNum2 = Math.floor(num * 100) / 100;
console.log(truncatedNum2); // Output: 10.12
```

## Other Methods Performed on Numbers and Decimals

### Rounding Numbers

- **`Math.round()`**: Rounds a number to the nearest integer.
  ```javascript
  let num = 10.5;
  let roundedNum = Math.round(num);
  console.log(roundedNum); // Output: 11
  ```

- **`Math.ceil()`**: Rounds a number up to the nearest integer.
  ```javascript
  let num = 10.1;
  let roundedUpNum = Math.ceil(num);
  console.log(roundedUpNum); // Output: 11
  ```

- **`Math.floor()`**: Rounds a number down to the nearest integer.
  ```javascript
  let num = 10.9;
  let roundedDownNum = Math.floor(num);
  console.log(roundedDownNum); // Output: 10
  ```

### Finding the Maximum and Minimum

- **`Math.max()`**: Returns the largest of zero or more numbers.
  ```javascript
  let maxNum = Math.max(10, 20, 30);
  console.log(maxNum); // Output: 30
  ```

- **`Math.min()`**: Returns the smallest of zero or more numbers.
  ```javascript
  let minNum = Math.min(10, 20, 30);
  console.log(minNum); // Output: 10
  ```

These are some commonly used methods for performing operations on numbers and decimals in JavaScript.
