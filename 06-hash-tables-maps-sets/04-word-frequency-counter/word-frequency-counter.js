function wordFrequencyCounter(str) {
    const map = new Map();
    if(str.length === 0){
        return map;
    }
    str.split(" ").forEach(word => {
        word =  word.toLowerCase();
        if(word[word.length - 1].charCodeAt() < "A".charCodeAt() || word[word.length - 1].charCodeAt() > "z".charCodeAt()){
            word = word.slice(0, word.length - 1);
        }
        map.set(word, (map.get(word) || 0 )+ 1);
    })
    return map;
}
console.log(wordFrequencyCounter("The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away."))
module.exports = wordFrequencyCounter;
