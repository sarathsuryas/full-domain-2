
const array = [2,4,9,5,6,3]
const smallOdd = array.reduce((a,b)=>{
if(b % 2 === 1 && a > b) {
  a = b
}
return a
},Infinity)

console.log(smallOdd)