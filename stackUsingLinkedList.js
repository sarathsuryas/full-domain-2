class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    }
    push(value) {
   const node = new Node(value)
    if(!this.head) {
      this.head = node
    } else {
       let temp = this.head
       node.next = temp
       this.head = node
    }
  } 

  pop() {
    let temp = this.head.next 
     this.head = temp
  }

 display() {
  let curr = this.head
  while (curr){
       console.log(curr.value)
       curr = curr.next
  }
 }

}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.pop()
stack.display()