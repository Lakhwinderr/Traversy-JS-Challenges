const HashTable = require('./HashTable');

function anagramGrouping(words) {
    const map = new HashTable();
    words.forEach(word => {
        const key  = word.split("").sort().join("");
        map.has(key) ? map.set(key, [...map.get(key), word]) : map.set(key, [word]);
    })
    return map.getValues();
}
console.log(anagramGrouping(['listen', 'silent', 'hello', 'world', 'act', 'cat']))
module.exports = anagramGrouping;
