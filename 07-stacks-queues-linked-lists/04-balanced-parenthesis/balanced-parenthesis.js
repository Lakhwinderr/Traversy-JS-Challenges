const Stack = require('./stack');

function balancedParenthesis(str) {
    const stack = new Stack()
    for(const parentheis of str){
        if(parentheis === '('){
            stack.push(1)
        }
        else{
            if(stack.isEmpty()){
                return false;
            }
            stack.pop()
        }
    }
    return stack.isEmpty()
}
// console.log(balancedParenthesis(')((())))'))
module.exports = balancedParenthesis;
