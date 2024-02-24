function longestConsecutiveSequence(arr) {
    const set = new Set();
    let max = 0;
    for(const value of arr){
        let count = 1;
        let curr = value;
        //check behind
        while(set.has(--curr)){
            count++;
        }
        //check ahead
        curr = value;
        while(set.has(++curr)){
            count++;
        }
        if(count > max){
            max = count;
        }
        set.add(value);
    }
    return max;
}
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]))
module.exports = longestConsecutiveSequence;
