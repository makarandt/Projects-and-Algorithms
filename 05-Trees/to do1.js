


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
    // add methods here ...

    add(val) {
        if (this.root) {
            var runner = this.root;
            while (runner) {
                if (val < runner.val) {
                    if (runner.left) {
                        runner = runner.left
                    } else {
                        runner.left = new Node(val);
                        runner = null;
                    }
                } else {
                    if (runner.right) {
                        runner = runner.right;
                    } else {
                        runner.right = new Node(val);
                        runner = null;
                    }
                }
            }

        } else {
            this.root = new Node(val);
        }
        return this.root;
    }

    //Contains value
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.val) {
                return true;
            }
            if (value < runner.val) {
                if (!runner.left) {
                    return false;

                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }
                runner = runner.right;
            }
        }
        return false;
    }
    min() {
        var runner = this.root;
        var min = this.root.val;
        while (runner.left) {
            if (runner.left.val < min) {
                min = runner.left.val;
            }
            runner=runner.left;
        }
        return min;
    }
    max() {
        var runner = this.root;
        var max = this.root.val;
        while (runner.right) {
            if (runner.right.val > max) {
                max = runner.right.val;
            }
            runner = runner.right;
        }
        return max;
    }








    ///size of BST
    size() {
        if (this.root) {
            var runner = this.root;
            return 1 + this.countnode(runner.left) + this.countnode(runner.right);

        } else {
            return 0;
        }


    }
    countnode(pNode) { //recursion for size
        if (!pNode) {
            return 0;
        } else {
            return 1 + this.countnode(pNode.left) + this.countnode(pNode.right);
        }
    }
// Is empty ?
    isEmpty(){
        if(this.root){
            return false
        }else{
            return true;
        }
    }
}

var myBST = new BST();
console.log(myBST.add(0));
console.log(myBST.add(3));
console.log(myBST.add(1));
console.log(myBST.add(3));
console.log(myBST.add(10));
console.log(myBST.add(13));
console.log(myBST.add(15));



//console.log(myBST.size(7))
//;
console.log("Size of BST= " + myBST.size());
console.log("contains 2? " + myBST.contains(2));
//console.log("min= " + myBST.min());
//console.log("max= " + myBST.max());
console.log("isEmpty?= " + myBST.isEmpty());



