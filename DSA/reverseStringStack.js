
class Stack {
  constructor() {
    this.items = []
  }
    
  push(str) {
    this.items.push(str)
  }
   pop() {
     return this.items.pop()
   }
}

const reverseString = (str) => {
  let result = ''
  let stack = new Stack()
      stack.push(str)
      let value = Array.from(stack.pop())
      for(let i = 0; i < str.length; i++) {
           result += value.pop()
      }
      return result
 }

 console.log(reverseString("cba"))