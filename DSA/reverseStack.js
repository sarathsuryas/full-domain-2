const stack = [10,20,30,40,50]

const tempStack = []

function reverse (stack,tempStack) {
  if(stack.length === 0) {
    return tempStack
  }
   tempStack.push(stack.pop())
   return reverse(stack,tempStack)
}

console.log(reverse(stack,tempStack))