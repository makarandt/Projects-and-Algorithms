class Node{
    constructor(value){
        this.val = value;
        next: null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    appendNode(node) {
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = node;
        }
        else {
            this.head = node;
        }
    }
}

var mySinglyLinkedList = new SLL();
//mySinglyLinkedList.appendNode(new (Node(10)))
var myLLArr = [40, 49, 47, 1, 16, 24, 47, 33, 20, 14]
for (var num of myLLArr){
    mySinglyLinkedList.appendNode(new Node(num));
}
    
    
//console.log(mySinglyLinkedList);

function reverseLinkedList(head){
//1Move following forward
//2.Move current pointer backwards
//3.Move previous forward
//4. Move current forward 

var previous=null;
var current=head;
var following=head;
while (current){
    following=following.next;
    current.next= previous;
    previous=current;
    current=following;
}
return previous;

}
console.log(reverseLinkedList(mySinglyLinkedList.head));