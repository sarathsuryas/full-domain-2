const array = [10,20,50,60,60,20,30,40,60]

const obj = {}
array.forEach((v)=>{
  if(obj[v] === undefined) {
    obj[v] = 1
  } else {
    obj[v]++
  }
})
 let max = 0
 let res = 0
for (let [key,value] of Object.entries(obj)) {
        if(value > max) {
          max = value
          res = key
        }
}

console.log(res)