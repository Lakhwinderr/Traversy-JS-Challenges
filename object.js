var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let i = 0;
    let j = 1;
    set.add(s[i]);
    let max = 1;
    let count = 0;
    while(j < s.length){
        while(j < s.length && !set.has(s[j])){
            set.add(s[j]);
            j++;
        }
        count = j - i;
        max = Math.max(count, max);
        set.delete(s[i]);
        i++;
    }
    return max;
};

console.log(lengthOfLongestSubstring("bbbbb"))