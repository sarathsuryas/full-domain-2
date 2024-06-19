const array = [10,11,10,12,10]

const unique = []

const tempObject = {}

array.forEach((item)=>{
  const exist = tempObject[item]
  if(!exist) {
    unique.push(item)
    tempObject[item] = item
  }
})

console.log(unique)