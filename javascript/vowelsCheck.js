

function vowelsCheck(value,it=0,res='') {

  if(value.length === it) {
    return res
  }
      let ch = value[it].toLowerCase()
      if(ch === 'a'||ch === 'e'||ch === 'i'||ch === 'u'||ch === 'o') {
        res+=ch
      }
    
  return vowelsCheck(value,it + 1,res)
}

 let res = vowelsCheck('aeiou')
 console.log(res);