const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
    str = str.split(/\W+/).map(word => word = word.toLowerCase());
    const stack = new Stack()
    const queue = new Queue()

    str.forEach(word => {
        word.split("").forEach(letter => {stack.push(letter)
        queue.enqueue(letter)
        })
    })
    
    while(!stack.isEmpty()){
        if(stack.pop() !== queue.dequeue()){
            return false;
        }
    }
    return true;
}
console.log(isPalindromeQueueStack('A fman, a plan, a canal: Panama'))
module.exports = isPalindromeQueueStack;
