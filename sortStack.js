const stack = [20,11,50,33,8,100]
let temp = 0
let tmpStack = []

while(stack.length > 0) {
  
  temp = stack.pop()
  while(tmpStack.length > 0 && tmpStack[tmpStack.length-1] < temp) {
    stack.push(tmpStack.pop())
  }

  tmpStack.push(temp)

}

while(tmpStack.length > 0) {
  console.log(tmpStack.pop())
}