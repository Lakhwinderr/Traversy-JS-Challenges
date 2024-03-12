const { LinkedList } = require('./linked-list');
function findMiddle(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3); // Middle node
list.add(4)
list.add(5)
list.add(6)
console.log(findMiddle(list)); 
module.exports = findMiddle;
