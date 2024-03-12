const HashTable = require('./HashTable');

function wordInstanceCounter(str, w) {
    const map = new Map();
    str.split(" ").forEach(word => {
        word = word.toLowerCase();
        //trim the extra letters from right
        let j = word.length - 1;
        while(j > -1 && word[j].charCodeAt() < "a".charCodeAt() || word[j].charCodeAt() > "z".charCodeAt()){
            word = word.slice(0, j)
            j--;
        }
        if(word === w){
            map.has(w) ?  map.set(w, map.get(w) + 1) : map.set(w, 1) ;
        }
    })
    return map.get(w);
}
console.log(wordInstanceCounter('Hello, Hello, Hello!', 'hello'));
module.exports = wordInstanceCounter;
