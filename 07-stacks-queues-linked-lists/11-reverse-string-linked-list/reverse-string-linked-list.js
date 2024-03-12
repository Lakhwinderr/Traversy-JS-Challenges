const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
    const linkedlist = new LinkedList()
    for(let i = str.length - 1;  i > -1; i--){
        linkedlist.add(str[i])
    }
    let res = ""
    let current = linkedlist.head;
    while(current !== null){
        res+=current.data;
        current = current.next;
    }
    return res;
}

console.log(reverseStringLinkedList('Lakhwinder Singh'))
module.exports = reverseStringLinkedList;
