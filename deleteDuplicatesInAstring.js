const { log } = require("console")

function countDuplicates(str='aabbcda') {
   let s = [...str]
   let charCount = {}
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
       if(charCount[char]!==undefined) {
         charCount[char]++
       } else {
        charCount[char] = 1
       }
    }
   for (let [key,value] of Object.entries(charCount)) {
        if(value % 2 === 0) {
           s.push(key)
        } else {
          for (let i = 0; i < s.length; i++) {
          
            if(key === s[i]) {
             s[i] = '' 
            }
          }
        }
   }
   console.log(s.join(''))
}

countDuplicates()