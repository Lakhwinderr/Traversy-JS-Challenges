function bubbleSort(arr) {
    function swap(arr, i, j){
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        return;
    }
    for(let i = arr.length - 2; i > -1; i--){
        let j = 0;
        let flag = true;
        while(j < i + 1){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                flag = false;
                
            }
            j++;
        }
        if(flag){
            break;
        }
    }
    return arr;
}

module.exports = bubbleSort;
console.log(bubbleSort([5, 4, 3, 2, 1]));