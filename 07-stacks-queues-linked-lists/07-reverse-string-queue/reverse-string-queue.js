const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
    const queue = new Queue()
    let result = ''
    for(let i = str.length - 1; i > -1; i--){
        queue.enqueue(str[i])
    }
    while(!queue.isEmpty()){
        result+=queue.dequeue()
    }
    return result;
};
// console.log(reverseStringWithQueue('Greetings from Earth'))
module.exports = reverseStringWithQueue;
