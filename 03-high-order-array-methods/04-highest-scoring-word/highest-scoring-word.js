function highestScoringWord(str) {
    let max = 0;
    let word = "";
    
    str.split(" ").forEach(ele => {
        const sum = ele.split("").reduce((sum, letter)=>{ return sum += (letter.charCodeAt() - 96) },0);
        if(sum > max){
            max = sum;
            word = ele;
        }
    });
    return word;
}

module.exports = highestScoringWord;
