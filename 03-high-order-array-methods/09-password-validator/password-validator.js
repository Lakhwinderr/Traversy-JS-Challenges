function validatePassword(str) {
    return str.length > 7 &&
            str.split("").some(letter => letter.charCodeAt() > 64 && letter.charCodeAt() < 91) &&
            str.split("").some(letter => letter.charCodeAt() > 96 && letter.charCodeAt() < 123) &&
            str.split("").some(letter => letter.charCodeAt() > 47 && letter.charCodeAt() < 58)
}
// const validate = validatePassword('HelloWorld');  // should return true

console.log(validate)
module.exports = validatePassword;
