const isValidIPv4 = (str) => {
    const arr = str.split(".");
    if(arr.length !== 4) {
        return false
    }

    return arr.every(num =>  {
        return num > -1 && num < 256 && num[0] !== '0';
    })
};
console.log(isValidIPv4('123.045.067.089'))
module.exports = isValidIPv4;
