function reverseString(str) {
    //base case => one or less letter remained
    if(str.length < 2){
        return str;
    }
    //get the last letter
    const last = str[str.length - 1];
    const remainingStr = str.slice(0, str.length - 1);
    return last + reverseString(remainingStr);
}
// console.log(reverseString("a"))
module.exports = reverseString;
