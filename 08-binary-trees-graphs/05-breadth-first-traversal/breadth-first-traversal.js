const Queue = require('./queue');

class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  if(!root){
    return [];
  }
  const res = [];
  const queue = new Queue();
  queue.enqueue(root);
  while(!queue.isEmpty()){
    const current = queue.dequeue();
    res.push(current.value);
    if(current.left){
      queue.enqueue(current.left)
    }
    if(current.right){
      queue.enqueue(current.right)
    }
  }
  return res;
}
const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
// console.log(breadthFirstTraversal(root))
module.exports = {
  Node,
  breadthFirstTraversal,
};
