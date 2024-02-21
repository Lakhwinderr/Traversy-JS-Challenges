function areAllCharactersUnique(str) {
    const set = new Set();
    for(let i = 0; i < str.length; i++){
        const letter = str[i];
        if(set.has(letter)){
            return false;
        }
        set.add(letter);
    }
    return true;
}

module.exports = areAllCharactersUnique;
