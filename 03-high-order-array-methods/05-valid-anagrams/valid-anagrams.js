function charFrequency(word){
    let obj = {};
    for(letter of word){
        obj[letter] = obj[letter] || 0  +  1;
    }
   return obj;
}
function validAnagrams(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    const str1Count = charFrequency(str1);
    const str2Count = charFrequency(str2);

    for (const letter in str1Count) {
        if(str1Count[letter] != str2Count[letter]){
            return false;
        }
    }
    return true;
}
// console.log(validAnagrams('hello', 'silent'))
module.exports = validAnagrams;
