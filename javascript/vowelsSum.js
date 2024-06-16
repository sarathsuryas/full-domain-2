const alpha = [{
  abc: 1,
  DeF: [],
}, {
  ghi: NaN,
  klm: 4,
}, {
  nOp: NaN,
  QRST: "[{}]",
}, {
  uvw: 7,
  xyz: 8
}]
const vowels = 'aeiou'
let sum = 0
for (let i = 0; i < alpha.length; i++) {
  let obj = alpha[i]
  for(let [key,value] of Object.entries(obj)) {
        for(let k = 0; k < key.length; k++) {
          if(vowels.includes(key[k].toLowerCase())) {
             if(typeof value === "number"&&!isNaN(value)) {
              sum += value
             }
          }
        }
  }

}

console.log(sum)