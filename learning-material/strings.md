# REGEX

In JavaScript, `.test()` is a method that is used with regular expressions (regex) to test whether a string contains a pattern matching the regex. This method returns `true` if the pattern is found in the string, otherwise it returns `false`.

### Syntax:
```javascript
regex.test(string)
```

- `regex`: The regular expression pattern to be tested against the string.
- `string`: The string to be tested for a match against the regular expression pattern.

### Example:
```javascript
const regex = /[a-z]/;
console.log(regex.test('Hello')); // Output: true
console.log(regex.test('123'));   // Output: false
```

In this example, the regular expression `/[a-z]/` checks if the string contains any lowercase alphabetic character. The `.test()` method returns `true` for the string `'Hello'` because it contains at least one lowercase alphabetic character, and `false` for the string `'123'` because it contains no lowercase alphabetic characters.

The `.test()` method is useful for simple pattern matching tasks where you just need to check if a pattern exists in a string. If you need more complex pattern matching or need to extract specific parts of a string, you would typically use other methods like `.match()` or `.exec()` along with regular expressions.