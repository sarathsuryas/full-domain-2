const { log } = require("console")

const obj = { 
  name:'sarath',
  age:'26',
  place:'pala'
}

let temp = Object.keys(obj)
delete obj[temp[temp.length-1]]

log(obj)