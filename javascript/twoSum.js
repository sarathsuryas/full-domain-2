let s = ssm = Infinity
let l = sl = -Infinity
let arr= [ 12, 35, 1, 10, 34, 1 ];

for (let i = 0; i < arr.length; i++) {
  // largest second largest
    if(arr[i] > l) {
      sl = l
      l = arr[i]
    }
    else if (arr[i]!==l && arr[i] > sl) {
      sl = arr[i]
    }
  // smallest second smallest

  if(arr[i] < s) {
    ssm = s
    s = arr[i]
  }
   else if (arr[i]!==s && arr[i] < ssm) {
    ssm = arr[i]
   }
}


console.log(ssm + sl)