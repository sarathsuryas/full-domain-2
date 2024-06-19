const array = [10, 11, 7, 8, 10, 9, 3]

for (let i = 0; i < array.length; i++) {
     if(array[i] % 2 === 1 && array[i + 1] % 2 === 1) {
      array.splice(i,2)
     }
}
console.log(array)