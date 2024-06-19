let str = 'sarath'

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  add(value) {
    let node = new Node(value)
    if(!this.head) {
      this.head = node
    } else {
      let curr = this.head
      while(curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
  }
  display() {
    let curr = this.head
    while(curr) {
      console.log(curr.value)
      curr = curr.next
    }
  }
   reverse() {
    let prev = null
    let curr = this.head
    let next = null
    while (curr) {
     next = curr.next
     curr.next = prev
     prev = curr
     curr = next
    }
    this.head = prev
   }
}

const ll = new LinkedList()

for(let i = 0; i < str.length; i++) {
  ll.add(str[i])
}

ll.reverse()
ll.display()