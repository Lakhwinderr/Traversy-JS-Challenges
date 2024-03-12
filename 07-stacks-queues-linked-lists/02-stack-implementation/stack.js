class Stack {
    constructor(){
        this.maxSize  = 100;
        this.top = -1;
        this.stack = []
    }
 //first make the isFull and isEmpty
  isFull(){
    return this.stack.length === this.maxSize;
  }
  isEmpty(){
    return this.stack.length === 0;
  }
    push(val){
        if(this.isFull()){
            console.log("stack is full")
            return false;
        }
        this.stack.push(val);
        this.top++;
        console.log("added the value to the stack")
        return true;
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return undefined;
        }
        this.top--;
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.top]
    }
}

const stack = new Stack();
stack.push("Lakhwinder")
stack.push("Ayushi")
console.log(stack.peek())
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek())

module.exports = Stack;
