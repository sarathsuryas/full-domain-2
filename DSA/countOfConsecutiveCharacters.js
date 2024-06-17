
const array = ['a','b','b','b','a','c','c','c','c']
const arr = []

const obj = {}

let result = ''
let counter = 1
for (let i = 0; i < array.length; i++) {
  if(array[i] === array[i+1]) {
    counter++
  } else {
    result = array[i] + counter
    arr.push(result)
    counter = 1
  }
  
}


for(let value of arr) {
   obj[value[0]] = parseInt(value[1])
}
let max = 0
let char = ''
for (let [key,value] of Object.entries(obj)) {
     if(value > max) {
      max = value
      char = key
     }
}

console.log(char)