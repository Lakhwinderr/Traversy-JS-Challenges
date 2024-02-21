function findMissingNumber(arr) {
    const n = arr.length;
    const sum = (n * (n + 1))/2;
    let max = 0;
    let sum2 = 0;
    for(let i = 0; i < n; i++){
        arr[i] > max ? max = arr[i] : null;
        sum2 += arr[i];
    }
    const num = max - (sum2 - sum);
    return num;
}

module.exports = findMissingNumber;
