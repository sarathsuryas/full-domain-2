const express = require('express')

const app = express();

const port = 3000

app.get('/',(req,res)=>{
   const number = req.query.number 
   const Array = []
   for(let i = 1; i <= 10; i++) {
    Array.push([`${i} * ${number} = ${i*number}`])
   }
   res.status(200).json({Array})
})

app.listen(port,(err)=>{
  if(err) {
    console.log(err)
  } else {
  console.log("server started in port 3000")
  }
})