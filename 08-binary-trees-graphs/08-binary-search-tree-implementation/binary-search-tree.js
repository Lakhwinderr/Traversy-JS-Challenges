class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        const node = new Node(val);
        if(!this.root){
            this.root = node;
            return;
        }
        let current = this.root;
        while(current){
            if(val < current.value){
                if(!current.left){
                    current.left = node;
                    return;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    lookup(val){
        if(!this.root){
            return null;
        }
        let current = this.root;
        while(current){
            if(val === current.value){
                return current;
            }
            if(val < current.value){
                current = current.left;
            }
            else{
                current = current.right;
            }
        }
        return null;
    }
    printTree(){
        if(!this.root){
            return;
        }
        function dfs(current){
            if(!current){
                return;
            }
            dfs(current.left);
            console.log(current.value);
            dfs(current.right);
        }
        dfs(this.root);
    }

    remove(val){
        //first find the node with value
        //possible that it is a leaf node 
       
        if(!this.root){
            return null;
        }
        
         //possible that only one node root node
         if(this.root.value === val && !this.root.left && !this.root.right){
            return this.root = null;
         }
        //find the node with value and track the current and prev node 
        //repeat this until current node becomes leaf
         let current = this.root;
         let prev = current;
         while(current && current.value !== val){
            prev = current;
            if(val < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
         }
         if(!current){
            return null;
         }
         //this after finding the node
         while(current.left || current.right){
            //3 cases
            //only left exit
            let tmp = current.value;
            prev =current;
            if(!current.right){
                
                current.value = current.left.value;
                current.left.value = tmp;
                current = current.left;
            }
            else{
                current.value = current.right.value;
                current.right.value = tmp;
                current = current.right;
            }
         }
         if(prev.left === current){
            prev.left = null;
         }
         if(prev.right === current){
            prev.right = null;
         }
         return this;
    }
}
const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(11);
bst.insert(2);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(8);
bst.printTree();
bst.remove(17);
// console.log(bst)
bst.printTree();
console.log(bst.lookup(2))

module.exports = { Node, BinarySearchTree };
