// var nodeA = new Node(10);
// var nodeB = new Node(17);
// var nodeC = new Node(4);
// var nodeD = new Node(93);
// nodeA.next=nodeB;
// nodeA.next=nodeC;
// nodeC.next=nodeD;
class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor(head) {
        this.head = null;
    }
    appendNode(node) {
        if (this.head) {
            //Append node
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = node;

        } else { // if no node available 
            this.head = node;
        }
        return this.head; //this instance of the class 

    }
    // Add Front
    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        if(this.head){
            var newNode =new Node(value);
            newNode.next =this.head;
            this.head=newNode;
            return this.head;
        }else { // if no node available 
            this.head = newNode;
        }
        return this.head;
    	
    }
    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
        if (this.head) {
            return this.head.val
        } else {
            return null;
        }
    }
    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.    
    removeFront(){
    if(this.head.next){
        this.head= this.head.next;
        return this.head;
    } else {
        this.head=null;
        return null;
    }
    }
}
var myLinkedList = new SLL();
//myLinkedList.appendNode(new Node(10))
// myLinkedList.appendNode(new Node(17))
 //console.log(myLinkedList.appendNode(new Node(6)));
//console.log(myLinkedList);
var myNumArr = [10, 20, 29, 34, 56, 48, 93, 100]

for (var i = 0; i < myNumArr.length; i++) {
    myLinkedList.appendNode(new Node(myNumArr[i]));

}

// for (var value of myNumArr){
//     myLinkedList.appendNode.new Node(value));
// }
//console.log(myLinkedList.head);
//console.log(myLinkedList.head.next.next.next.next.next.val);
console.log(myLinkedList.addFront(100))


