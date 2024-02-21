
# Common Loops in JavaScript

JavaScript offers several types of loops to iterate over data structures or execute code repeatedly. Here are explanations of some common loop types:

### 1. `for` Loop:

The `for` loop is a traditional looping construct that iterates over a block of code a specified number of times.

**Syntax:**
```javascript
for (initialization; condition; iteration) {
    // code block to be executed
}
```

- `initialization`: Executed before the loop starts. Typically used to declare and initialize loop variables.
- `condition`: Evaluated before each iteration. If true, the loop continues; if false, the loop ends.
- `iteration`: Executed after each iteration of the loop.

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### 2. `for...in` Loop:

The `for...in` loop iterates over the enumerable properties of an object.

**Syntax:**
```javascript
for (variable in object) {
    // code block to be executed
}
```

- `variable`: A variable that represents each enumerable property in turn.
- `object`: The object whose enumerable properties are iterated over.

**Example:**
```javascript
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
```

### 3. `for...of` Loop:

The `for...of` loop iterates over iterable objects (arrays, strings, maps, sets, etc.) and allows you to access the values directly.

**Syntax:**
```javascript
for (variable of iterable) {
    // code block to be executed
}
```

- `variable`: A variable that represents each value in turn.
- `iterable`: An iterable object (such as an array, string, map, set, etc.).

**Example:**
```javascript
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}
```

### 4. `while` Loop:

The `while` loop executes a block of code as long as a specified condition is true.

**Syntax:**
```javascript
while (condition) {
    // code block to be executed
}
```

- `condition`: Evaluated before each iteration. If true, the loop continues; if false, the loop ends.

**Example:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

### 5. `do...while` Loop:

The `do...while` loop is similar to the `while` loop, but the condition is evaluated after executing the block of code, so the block is always executed at least once.

**Syntax:**
```javascript
do {
    // code block to be executed
} while (condition);
```

- `condition`: Evaluated after each iteration. If true, the loop continues; if false, the loop ends.

**Example:**
```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

These are the common types of loops in JavaScript. Each loop has its specific use cases and advantages, so choose the one that best fits your needs in a particular situation.
```

You can copy this content into a `.md` file using a text editor or Markdown editor of your choice.