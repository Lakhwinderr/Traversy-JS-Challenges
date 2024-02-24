function anagramGrouping(arr) {
    const map = new Map();
    arr.forEach(word => {
        const sortedWord = word.split("").sort().join("");
        map.has(sortedWord) ?  map.get(sortedWord).push(word) : map.set(sortedWord, [word]);
    })
    return Array.from(map.values());
}
// console.log(anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']))
module.exports = anagramGrouping;
