const add = (num1,num2,mul) => {
  let sum = num1 + num2
  return mul(sum,sub)
}
const mul = (result,sub) => {
  let sum = result * 10
  return sub(sum,div)
}

const sub = (result,div) => {
  let sum = result - 10
  return div(sum)
}

const div = (result) => {
return result / 10
}



console.log(add(10,20,mul))


const promise = (num1,num2) => {
     new Promise((res,rej)=> {
      res(num1+num2)
    }).then((data)=> {
       new Promise((res,rej)=>{
        res(data * 10)
      }).then((data)=>{
         new Promise((res,rej)=>{
          res(data - 10)
        }).then((data)=>{
           new Promise((res,rej)=>{
            res(data/10)
          }).then((data)=>console.log(data))
        })
      })
    })
}

promise(10,20)