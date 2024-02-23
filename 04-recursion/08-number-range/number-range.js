function numberRange(start, end) {
    if(start === end){
        return new Array(1).fill(start);
    }

    const arr  = numberRange(start, end - 1);
     arr.push(end);
     return arr;
}
console.log(numberRange(1, 5))
module.exports = numberRange;
