const array = ["hello", "world", "this", "is", "a", "test"];
const quickSort = (array) => {

  if(array.length <= 1) {
    return array
  }
  let pivot = array[0]
  let leftArr = []
  let rightArr = []

  for (let i = 1; i < array.length; i++) {
      if(array[i] > pivot) {
        rightArr.push(array[i])
      } else {
        leftArr.push(array[i])
      }
  }

  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

console.log(quickSort(array))