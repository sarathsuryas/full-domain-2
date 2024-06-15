const arr = [1, 44, [2, [3, 9], 67], 9];
const array = []
function flatArray(arr, i, array) {
  if (arr.length === i) {
    return
  }
  if (Array.isArray(arr[i])) {
    flatArray(arr[i], 0, array)
  } else {
    array.push(arr[i])
  }
  flatArray(arr, i + 1, array)
}
flatArray(arr, 0, array)

console.log(array)