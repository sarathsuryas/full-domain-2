const fs = require('fs')

const date = new Date()

fs.writeFile('fsFile/sample.txt',`${date}`,(error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log("file written successfully")
  }
})

 fs.stat('fsFile/sample.txt',(err,stats)=>{
  if(err) {
    console.log(err)
  } else {
    console.log(stats)
  }
 })

fs.rmdir('fsFile',()=>{
  console.log("deleted")
})


fs.readFile('file.txt','utf-8',(err,data)=>{
  if(err) console.log(err)
  console.log(data)
})