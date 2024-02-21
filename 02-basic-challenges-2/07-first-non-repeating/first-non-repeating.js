function findFirstNonRepeatingCharacter(str) {
    // const set1 = new Set();
    // const set2 = new Set();
    // for(let i = 0; i < str.length; i++){
    //     if(set1.has(str[i])){
    //         set2.add(str[i]);
    //     }
    //     set1.add(str[i])
    // }

    // for(const value of set1){
    //     if(!set2.has(value)){
    //         // console.log(value)
    //         return value;
    //     }
    // }
    // return null;
    const obj = {};
    for(const letter of str){
      obj[letter]  = (obj[letter] || 0) + 1;
    }
    
    // Object.keys(obj).forEach( letter => {
    //     if(obj[letter] == 1){
    //         console.log(letter);
    //         return letter;
    //     }
    // }) you can't use forEach here cos it has problems with return statement

    //using the common for in loop

    for (const key in obj) {
       if(obj[key] == 1){
        // console.log(key)
        return key;
       }
    }
    return null;
}
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'

module.exports = findFirstNonRepeatingCharacter;
