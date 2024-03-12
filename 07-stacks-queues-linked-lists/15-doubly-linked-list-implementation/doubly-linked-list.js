class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data){
        const node = new Node(data)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        node.left = this.tail
        this.tail.right = node;
        this.tail = node;
        this.length++;
        return;
    }

    printAll(){
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.right;
        }
        return;
    }
    prepend(data){
        const node = new Node(data)
        if(this.length === 0){
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        this.head.left = node;
        node.right = this.head;
        this.head = node;
        this.length++;
        return;
    }
    insertAt(idx, data){
        if(idx < 0 || idx > this.length){
            return null;
        }
        if(idx === 0){
            return  this.prepend(data)
            
        }
        if (idx === this.length){
            return this.append(data)
        }
        
        const node = new Node(data);
        let i = 0;
        let current  = this.head;
        while(i < idx - 1){
            current = current.right;
            i++;
        }
        let next = current.right;
        current.right = node;
        node.left = current;
        node.right = next;
        next.left = node;
        this.length++
        return;
    }
    get(idx){
        if(idx < 0 || idx > idx.length - 1){
            return null;
        }
        let current = this.head;
        let i = 0;
        while(i < idx){
            current = current.right;
            i++;
        }
        return current;
    }
    remove(idx){
        if(idx < 0 || idx > idx.length - 1){
            return null;
        }
        
        if(idx === 0){
            this.head = this.head.right;
            this.head.left = null;
            this.length--;
            return;
        }
        if(idx === this.length - 1){
            this.tail = this.tail.left;
            this.tail.right = null;
            this.length--;

            return;
        }
        let current = this.get(idx);
        console.log(current)
        current.left.right = current.right;
        current.right.left = current.left;
        this.length--;

        return;

    }
    contains(val){
        let current = this.head;
        while(current !== null){
            if(current.data === val){
                return true;
            }
            current = current.right;
        }
        return false;
    }
}
const list = new DoublyLinkedList();

list.append(100);
list.append(200);
list.append(300);
list.append(400);
list.remove(2);
list.printAll()
console.log(list.contains(200))
module.exports = DoublyLinkedList;
