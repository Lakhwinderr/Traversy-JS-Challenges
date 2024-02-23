

1. **Using the `Array()` constructor and `fill()` method**:
   You can use the `Array()` constructor to create an array of a specific length and then use the `fill()` method to populate it with the desired value.

    ```javascript
    const size = 5;
    const value = 0;
    let newArray = new Array(size).fill(value);
    console.log(newArray); // Output: [0, 0, 0, 0, 0]
    ```

2. **Using `Array.from()`**:
   Another approach is to use `Array.from()` to create an array of a specific length and initialize it with a mapping function.

    ```javascript
    const size = 5;
    const value = 0;
    let newArray = Array.from({ length: size }, () => value);
    console.log(newArray); // Output: [0, 0, 0, 0, 0]
    ```

3. **Using a loop**:
   You can also use a loop to create an array of a specific size and populate it with the desired value.

    ```javascript
    const size = 5;
    const value = 0;
    let newArray = [];
    for (let i = 0; i < size; i++) {
        newArray.push(value);
    }
    console.log(newArray); // Output: [0, 0, 0, 0, 0]
    ```

All of these approaches will create an array of a fixed size filled with the specified value. Choose the one that best fits your coding style and requirements.