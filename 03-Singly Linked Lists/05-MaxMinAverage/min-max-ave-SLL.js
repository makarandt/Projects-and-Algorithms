class Node {
  constructor(value) {
    this.value = value;
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
    } else {
      // if no node available
      this.head = node;
    }
    return this.head; //this instance of the class
  }

  min() {
    if (this.head) {
      var minimum = this.head.value;
      var runner = this.head.next;
      while (runner) {
        if (minimum > runner.value) {
          minimum = runner.value;
          console.log("MINIMUM= "+minimum);
        }
        runner = runner.next;
      }
      console.log("min " + minimum);
      return minimum;
    }
    return null;
  }

  max() {
    if (this.head) {
        
    var maximum = this.head.value;
    var runner = this.head.next;
    while (runner) {
      if (maximum < runner.value) {
        maximum = runner.value;
      }
      runner = runner.next;

    }
    return maximum;}
    return null;
  }

  ave() {
    if (this.head) {
      var total = this.head.value;
      var count = 1;
      var runner = this.head.next;
      while (runner) {
        total += runner.value;
        count++;
        runner=runner.next;
      }
      return total / count;
      //
    }
    return null;
  }
}

var myLinkedList = new SLL();
var myNumArr = [10, 20, 29, 34, 56, 48, 93, 100];

for (var i = 0; i < myNumArr.length; i++) {
  myLinkedList.appendNode(new Node(myNumArr[i]));
  console.log(myNumArr[i]);
  
}

console.log("min= "+myLinkedList.min());
console.log("max= "+myLinkedList.max());
console.log("ave= "+myLinkedList.ave());

