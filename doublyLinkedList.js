
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
   isEmpty() {
    return this.size === 0
   }
   add(value) {
    let newNode = new Node(value);
      if(this.size===0) {
        this.head = newNode
        this.tail = newNode
      } else {
       newNode.prev = this.tail
       this.tail.next = newNode
        this.tail = this.tail.next
      }
      this.size++
   }
   display() {
    let curr = this.head
    let str = ''
    while(curr) {
        str += curr.value + ' '
        curr = curr.next
    }
    console.log(str)
   }
   reverse() {
    let curr = this.tail
    let str = ''
    while(curr) {
      str += curr.value + " "
      curr = curr.prev
    }
    console.log(str)
   }

   insertAtIndex(value,index) {
    if(index < 0 || index <= this.size) {
     console.log("invalid index")
     return
    }
    let newNode = new Node(value)
      let temp = this.head
      if(index === 0) {
        
        newNode.next = temp
        this.head = newNode
        temp.prev = this.head
        return
      }
      let curr,prev
       curr = temp
      let it = 0 
      while(it < index) {
          prev = curr
          curr = curr.next
          it++
      } 
      prev.next = newNode
      newNode.prev = prev
      newNode.next = curr
      curr.prev = newNode
      this.size++
   }
   removeFrom(index) {
     if(index < 0 || index >= this.size) {
      console.log("invalid index")
      return
     }
     if(index === this.size-1) {
      let temp = this.tail.prev
      this.tail = temp
      this.tail.next = null
     }
    else if(index === 0) {
       let temp = this.head.next
       temp.prev = null
       this.head = temp
     } else {
      let curr
      let prev
      curr = this.head
      let it = 0
      while(it < index) {
         prev = curr
         curr = curr.next
         it++
      }
       prev.next = curr.next
       let varable = curr.next
       varable.prev = prev
     }
     this.size--
   }
   removeElement(element) {
        let curr = this.head
        let prev = null
        if(element === this.tail.value) {
          let temp = this.tail.prev
          this.tail = temp
          this.tail.next = null
          return
        }
        while(curr) {
          if(element === curr.value) {
            if(prev === null) {
              this.head = curr.next
              this.head.prev = null
            } else {
              prev.next = curr.next 
              let variable = curr.next
              variable.prev = prev
            }
          }
          prev = curr
          curr = curr.next
        }
   }
   indexOf(element) {
    let index = -1
    let curr = this.head 
    while(curr) {
      index++
      if(curr.value === element) {
        console.log("index is :",index)
        return
      }
      curr = curr.next
    }
    return -1
   }
}

let list = new DoublyLinkedList() 
list.add(10)
list.add(20)
list.add(30)
list.add(40)
list.indexOf(40)

