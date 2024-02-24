function symmetricDifference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2  = new Set(arr2);
    
    for(const value of set1){
        if(set2.has(value)){
            set1.delete(value);
            set2.delete(value);
        }
    }

    return [...Array.from(set1),...Array.from(set2)]
}
// console.log(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
module.exports = symmetricDifference;
