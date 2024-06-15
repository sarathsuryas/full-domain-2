const array = [10,20,30,40,50]

let recursiveFunction = (array,target,start,end) => {
  if(start > end) return false
 let mid = Math.floor((start+end)/2)
 if(array[mid]===target) return true
 if(target < array[mid]) return recursiveFunction(array,target,start,mid-1)
 else return recursiveFunction(array,target,mid+1,end)
}

let x = 11

console.log(recursiveFunction(array, x, 0, array.length - 1))
