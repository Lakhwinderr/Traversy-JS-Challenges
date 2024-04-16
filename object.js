var characterReplacement = function(s, k) {
    let max = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i - 1] === s[i]){
            continue;
        }
        let l = i;
        let r = i;
        let c = k
        while(l > -1 && c > 0){
            if(l > 0 && s[l] === s[i]){
                l--;
            }else{
                l--;
                c--;
            }
        }
        while(r < s.length && c > 0){
            if(s[r] === s[i]){
                r++;
            }else{
                r++;
                c--;
            }
        }
        const count = r - l;
        max = Math.max(count, max)
    }
     return max;
};
console.log(characterReplacement("BAAAB",2))