class Node {
  constructor(val){
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

function recDepthFirstTraversal(root) {
  if(!root){
    return [];
  }
  const left = recDepthFirstTraversal(root.left);
  const right = recDepthFirstTraversal(root.right);
  
  return [root.value, ...left, ...right]
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
