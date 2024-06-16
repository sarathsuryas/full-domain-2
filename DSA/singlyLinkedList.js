class Node {
  constructor(data) {
    this.value = data;
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
        let curr 
         curr = this.head
        while(curr.next) {
          curr = curr.next
        }
       curr.next = node
      }
      this.size++
     }

     display() {
      if(this.size===0) {
        console.log("list is empty")
        return
      }
    let curr = this.head
      while(curr) {
        console.log(curr.value)
        curr = curr.next
      }
     }

     insertAtIndex(element,index) {
   if(index < 0 || index > this.size) 
    console.log("enter a valid index")
      else {
        let newNode = new Node(element)
        if(index === 0) {
         let temp = this.head
          this.head = newNode
        this.head.next = temp
        } else {
         let curr = this.head
         let prev
          let it = 0
          while(it < index) {
              prev = curr
               curr = curr.next
               it++
          }
          prev.next = newNode
          newNode.next = curr
        }
      }
      this.size++
     }

     removeFrom(index) {
           if(index < 0 || index >=this.size) {
             return  console.log("invalid index")
           } 
           if(index === 0) {
              let temp = this.head.next
              this.head = temp
           } else {
               let prev,curr
               curr = this.head
               let it = 0
               while(it < index) {
                prev = curr
                curr = curr.next
                it++
               }
               prev.next = curr.next
           }
           this.size--
     }
     removeElement(element) {
       let curr = this.head
       let prev = null
       while (curr) {
        if(element === curr.value) {
           if(prev === null) {
            this.head = curr.next
            
           } else {
              prev.next = curr.next
              
           }
           this.size--
           return 
        }
        prev = curr
        curr = curr.next
       }
       return -1
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
     isEmpty() {
      return this.size === 0
     }
}


let list = new LinkedList() 

list.add(10)
list.add(20)
list.add(30)
console.log(list.isEmpty())

list.display()