
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
 


    min(node){
        if (this.head){
            var minimum= this.head.value;
            var runner= this.head;
            while(runner){
                if(runner.nest.value< minimum)

            }
        }
    }
    }
    