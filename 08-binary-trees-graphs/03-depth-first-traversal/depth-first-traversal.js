const Stack = require('./stack');

class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right  =null;
  }
}

function depthFirstTraversal(root) {
  if(!root){
    return [];
  }
  const result = []
  const stack = new Stack();
  stack.push(root)
  while(!stack.isEmpty()){
    const node = stack.pop();
    result.push(node.value);
    if(node.right){
      stack.push(node.right)
    }
    if(node.left){
      stack.push(node.left)
    }
  }
  return result;
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

    console.log(depthFirstTraversal(root))
module.exports = {
  Node,
  depthFirstTraversal,
};
