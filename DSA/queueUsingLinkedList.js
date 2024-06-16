const { log } = require("console")

class Node { 
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class Queue {
  constructor() {
    this.front = null
     this.rear = null
  }
 enqueue(value) {
    let node = new Node(value)
    if(!this.front) {
      this.front = node
      this.rear = node
    } else {
      this.rear.next = node
      this.rear = node
    }
 }

 dequeue() {
  let temp = this.front.next 
  this.front = temp
 }

display() {
  let curr = this.front
  while(curr) {
    log(curr.value)
    curr = curr.next
  }
}

}

let q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.dequeue()
q.dequeue()
q.display()