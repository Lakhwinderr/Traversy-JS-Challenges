class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if(!root){
    return 0;
  }
  let count = 1;
  const leftC = maxDepth(root.left);
  const rightC = maxDepth(root.right);

  return Math.max(count + leftC, count + rightC);
}
const root = new Node(3);
    const node9 = new Node(9);
    const node20 = new Node(20);
    const node15 = new Node(15);
    const node7 = new Node(7);

    root.left = node9;
    root.right = node20;
    node20.left = node15;
    node20.right = node7;
    console.log(maxDepth(root))
module.exports = {
  maxDepth,
  Node,
};
