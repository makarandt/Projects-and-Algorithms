class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
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
    contains(value) {
        var runner = this.head;
        
            while (runner) {
                if (value === runner.val) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        
        }
    }
    

var myLinkedList = new SLL();
var myNumArr = [10, 20, 29, 34, 56, 48, 93,100]

for (var i = 0; i < myNumArr.length; i++) {
    myLinkedList.appendNode(new Node(myNumArr[i]));

}
console.log(myLinkedList.contains(100))