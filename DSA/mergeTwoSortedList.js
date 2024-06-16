const { log } = require("console");

// brute force method

// class Node {
//   constructor(key) {
//     this.key = key;
//     this.next = null
//   }
// }

// function newNode(key) {
//   let temp = new Node(key)
//   return temp
// }

// let a = newNode(5)
// a.next = newNode(10)
// a.next.next = newNode(15)
// a.next.next.next = newNode(40)

// let b = newNode(2)
// b.next = newNode(3)
// b.next.next = newNode(20)

// let v = []

// while(a!==null) {
//   v.push(a.key)
//   a = a.next
// }

// while(b!==null) {
//   v.push(b.key)
//   b = b.next
// }

// v.sort((a,b)=>a-b)

// let result = newNode(-1)

// let temp = result 

// for(let i = 0; i < v.length; i++) {
//   result.next = newNode(v[i])
//   result = result.next
// }
// temp = temp.next
// while(temp.next) {
//   console.log(temp.key)
//   temp = temp.next
// } 


class Node {
  constructor(d) {
    this.data = d
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  addToTheLastNode(value) {
    let node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
  }

  printList() {
    if (this.head !== null) {
      let curr = this.head
      while (curr) {
        console.log(curr.data)
        curr = curr.next
      }

    }
  }

}

function mergeSortedList(headA,headB) {
  let dummyNode = new Node(0)
  let tail = dummyNode
  while(true){
    if(headA===null) {
      
    }
  } 
}



let llist1 = new LinkedList()
let llist2 = new LinkedList()

llist1.addToTheLastNode(5)
llist1.addToTheLastNode(10)
llist1.addToTheLastNode(15)

llist2.addToTheLastNode(2)
llist2.addToTheLastNode(3)
llist2.addToTheLastNode(20)
llist2.addToTheLastNode(21)



llist1.printList()





