class Queue {
    constructor(){
        this.queue  = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    getLength(){
        return this.tail- this.head;
    }
    isEmpty(){
        return this.getLength() === 0;
    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    enqueue(val){
        if(this.isFull()){
            return false;
        }
        this.queue[this.tail++] = val;
        return true;
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue[this.head++];
    }
    peek(){
        return this.queue[this.head];
    }
}
const queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.isFull()); // false
console.log(queue.enqueue(1)); // true
console.log(queue.enqueue(2)); // true
console.log(queue.enqueue(3)); // true
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.getLength());
console.log(queue)
module.exports = Queue;
