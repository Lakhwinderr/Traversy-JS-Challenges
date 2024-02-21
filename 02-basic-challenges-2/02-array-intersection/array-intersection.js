function arrayIntersection(arr1, arr2) {
    let newArr = [];
    const set = new Set(arr1);
    for(let i = 0; i < arr2.length; i++){
        if(set.has(arr2[i])){
            newArr.push(arr2[i])
        }
    }
    return newArr;
}

module.exports = arrayIntersection;

