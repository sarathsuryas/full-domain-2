

let str = "ZKLCBa"
let array = str.split('')

for (let i = 0; i < array.length-1; i++) {
      for(let j = i + 1; j < array.length; j++) {
        if(array[i].toLowerCase() > array[j].toLowerCase()) {
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
}
str = array.join('')
console.log(str)