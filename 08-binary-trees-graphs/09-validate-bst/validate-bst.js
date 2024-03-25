class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  let res = true;
  function dfs(root){
    if (!root.left && !root.right) {
      return root.value;
    }
    const leftMax = dfs(root.left);
    const rightMax = dfs(root.right);
  
    //3 cases
    //current can have one node - either left or right;
    let valid = false;

    if (!root.right) {
      valid = root.value <= leftMax;
    }
    if (!root.left) {
      valid = rightMax >= root.value;
     
    } else {
      valid =  root.value >= leftMax && rightMax >= root.value;
    }
    res = valid && res;
    return Math.max(Math.max(rightMax,leftMax), root.value)
  }
  dfs(root)
  return res;
}
const root = new Node(8);
    const node4 = new Node(4);
    const node10 = new Node(10);
    const node2 = new Node(2);
    const node12 = new Node(12);

    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node12;
console.log(isValidBST(root))
module.exports = { Node, isValidBST };
