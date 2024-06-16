const http = require('http')
const port = 3000
const host = 'localhost'
const url = require('url')

const server = http.createServer((req,res)=>{
     res.writeHead(200)
      const a = Number(url.parse(req.url,true).query.a)
      const b = Number(url.parse(req.url,true).query.b)
     res.end(`sum of ${a} and ${b} is = ${a+b}`)
})

server.listen(port,host,()=>{
  console.log(`server listening on http://${host}:${port}`)
})