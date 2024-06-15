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
  insert(value) {
    let newNode = new Node(value)
     if(this.size === 0) {
      this.head = newNode
     }else {
      let curr = this.head
      while(curr.next) {
        curr = curr.next
      }
      curr.next = newNode
     }
     this.size++
  }
  display () {
    let curr = this.head
    let str = ''
    while(curr) {
       str+= curr.value + ' '
       curr = curr.next
    }
    console.log(str)
  }
  middle () {
    let slow = this.head
    let fast = this.head
     let curr = this.head 
     while(fast&&fast.next) {
        slow = slow.next
        fast = fast.next.next
     }
      console.log(slow.value)
  }
 }

 let list = new LinkedList()
 list.insert(10)
 list.insert(20)
 list.insert(30)
 list.insert(40)
 list.insert(50)
 list.middle()