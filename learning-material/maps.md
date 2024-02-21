# JavaScript Maps

Maps in JavaScript are key-value pairs collections, somewhat similar to objects, but with some key differences. Here are some important concepts related to JavaScript Maps:

1. **Key-Value Pairs**: A map stores a collection of key-value pairs where each key is unique. You can associate a value with a key and retrieve the value later using that key.

2. **Data Structure**: Unlike arrays which use numeric indexes, maps can use any type of value as a key, including objects, functions, and primitive types like strings and numbers.

3. **Order Preservation**: Maps preserve the order of key-value pairs, unlike objects in JavaScript, which traditionally did not guarantee order.

4. **Methods**: Maps provide methods to manipulate data, such as `set()` to add new key-value pairs, `get()` to retrieve values by key, `has()` to check for the presence of a key, `delete()` to remove key-value pairs, and `clear()` to remove all key-value pairs.

5. **Iterating Over Maps**: Maps can be iterated using various methods like `forEach()`, `keys()`, `values()`, and `entries()`.

6. **Size Property**: Maps have a `size` property that returns the number of key-value pairs in the map.

Here's a basic example demonstrating the usage of a map:

```javascript
// Creating a new Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);

// Retrieving values
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age'));  // Output: 30

// Checking if a key exists
console.log(myMap.has('name')); // Output: true
console.log(myMap.has('gender')); // Output: false

// Deleting a key-value pair
myMap.delete('age');

// Iterating over keys and values
for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: John

// Clearing the map
myMap.clear();
console.log(myMap.size); // Output: 0
