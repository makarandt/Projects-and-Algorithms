//log 8 =3

// how many nodes in a level on BST?
//counting from zero 2^h
// Count from one: 2^h-1

//How many nodes in a BST ?

//how many nodes in a BST?
//2^h-1
//given the root of binary  search tree 

//binary tre in code 

var mySortedArr = [1, 2, 4, 6, 13, 18, 21, 9, 13, 21]

var exampleArr = [1, 3, 5, 7, 9, 13, 21]
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    appendNode() {
        if (this.root) {
            var runner = this.root;
            while (runner) {
                if (node.val < runner.val) {
                    if (runner.left) {
                        runner = runner.left
                    } else {
                        runner.left = node;
                        runner = null;
                    } 
                }else {
                        if (runner.right) {
                            runner = runner.right;
                        } else {
                            runner.right = node;
                            runner = null;
                        }
                    }
                }
            
        } else {
            this.root = node;
        }
        return this.root;
    }
}

var MyBST = new BST();
MyBST.appendNode(new Node(7));