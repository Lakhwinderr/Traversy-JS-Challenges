const Stack = require('./stack');

function reverseStringStack(str) {
    const stack = new Stack()
    let res = ""
    for(const letter of str){
        stack.push(letter)
    }
    while(!stack.isEmpty()){
        res += stack.pop()
    }
    return res;
}
console.log(reverseStringStack('Greetings from Earth'))
module.exports = reverseStringStack;
