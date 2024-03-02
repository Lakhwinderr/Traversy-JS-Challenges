## .sort() Default Behavior 
Default sorting behavior of JavaScript's `Array.sort()` method is lexicographic (dictionary order) when applied to an array of numbers. To sort the array of numbers in ascending order, you need to provide a custom comparison function to `Array.sort()`.

Here's how you can do it:

```javascript
const arr = [100, 4, 200, 1, 3, 2];

// Custom comparison function for numeric sorting
function compareNumbers(a, b) {
  return a - b;
}

arr.sort(compareNumbers);

console.log(arr); // Output: [1, 2, 3, 4, 100, 200]
```

In this example, the `compareNumbers` function is passed as an argument to `Array.sort()`. This function subtracts `b` from `a`. If the result is negative, `a` comes before `b` in the sorted order; if it's positive, `b` comes before `a`; and if it's zero, the order of `a` and `b` remains unchanged. This custom comparison function ensures that the array is sorted in ascending numerical order.