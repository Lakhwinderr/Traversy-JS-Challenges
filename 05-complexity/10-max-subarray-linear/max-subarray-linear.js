function maxSubarraySum(arr, k) {
    let max = 0;
    for(let i = 0; i < k; i++){
        max+=arr[i];
    }
    let sum = max;
    for(let j = k; j < arr.length; j++){
      sum = sum + arr[j] - arr[j - k];
      if(sum > max){
        max = sum;
      }
    }
    return max;
}
// const arr1 = [-2, -5, -3, -1, -11, -7, -6, -4];
// const k1 = 3;
// console.log(maxSubarraySum(arr1, k1));


module.exports = maxSubarraySum;
