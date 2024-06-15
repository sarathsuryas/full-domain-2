let checknumber = (number) => {
    if(number === 0) return (number + " is even")
    if(number === 1) return (number + " is odd")
    return checknumber(number - 2)  
}

console.log(checknumber(5))
console.log(checknumber(10))

