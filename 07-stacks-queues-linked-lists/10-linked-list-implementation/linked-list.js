class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const node = new Node(data)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data)
            current = current.next;
        }
    }

    get(idx){
        let current = this.head;
        let i = 0;
        while(i < idx ){
            if(current.next === null){
                return null;
            }
            current = current.next;
            i++;
        }
        return current.data;
    }
    insertAt(idx, data){
        let current = this.head;
        let i = 0;
        
        while(i < idx  - 1 && current.next !== null){
            current = current.next;
            i++;
        }
        const node = new Node(data);
        if(idx  === 0){
            node.next =    this.head;
            this.head = node;
            return;
        }
        node.next = current.next;
        current.next = node;
    }

    removeFrom(idx){
        let current = this.head;
        let i = 0;
        
        while(i < idx  - 1 && current.next !== null){
            current = current.next;
            i++;
        }
        if(idx  === 0){
            this.head = this.head.next;
            return;
        }
        if(current.next === null){
            return;
        }
        current.next = current.next.next;
    }
}


module.exports = { Node, LinkedList };
