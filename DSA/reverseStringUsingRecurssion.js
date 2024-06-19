const { log } = require("console")

let string = 'sarath'

function reverse(str,i = str.length-1,res='') {
   if(i < 0) {
      return res
   } 
    else {
       res += str[i]
       return reverse(str, i-1,res)
    }
}

log(reverse(string))