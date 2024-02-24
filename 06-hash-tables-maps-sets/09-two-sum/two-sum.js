function twoSum(nums, sum) {
    const set  = new Set();
    const arr = []
    for(let i = 0; i < nums.length; i++){
        const otherNum = sum - nums[i];
        if(set.has(otherNum)){
            for(let k = 0; k < i; k++){
                if(nums[k] === otherNum){
                    arr.push(k);
                    arr.push(i);
                    break;
                }
            }
          break;  
        }
        set.add(nums[i])
    }
    return arr;
}

// console.log(twoSum([2,3], 5));

module.exports = twoSum;
