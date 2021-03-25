class Node {
    constructor(value){
        this.value=value;
        this.net =null
    }
}



class SLL {
    constructor() {
            this.head = null;
    }
    // a method for adding nodes to the front of our list
    addFront(value) {
        //create new node
        newNode = new Node(value);
        //forming connection from newNode to current head node
        newNode.next = this.head;
        //reassigning this Singly Linked List's head to newNode
        this.head = newNode;
        //returning this,Allowing for chaining methods
        return this
    }
    //a method for viewing our list
    view() {
        //will have to see all of the nodes...
        //Starting from the beginning of our list
        var currentNode = this.head;
        //as long as curentNode exists , or is NOT null
        while (currentNode) {
          //  console.log(`current nodes value is ${curentNode.value}`)
            //moving on to next node
            currentNode = currentNode.next
        }
    }
}
console.log(SLL.addFront(9))