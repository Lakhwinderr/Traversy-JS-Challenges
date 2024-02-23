function findMissingLetter(arr) {
    for(let i = 1; i  < arr.length; i++){
        if(arr[i].charCodeAt() !== arr[i - 1].charCodeAt() + 1){
            return String.fromCharCode(arr[i].charCodeAt() - 1)
        }
    }
    
}
console.log(findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']))
module.exports = findMissingLetter;
