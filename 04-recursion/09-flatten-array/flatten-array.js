function flattenArray(arr) {
    if(arr.every(ele => typeof ele === "number")){
        return arr;
    }
    
    for(let i = arr.length - 1; i > -1; i--){
        if(typeof arr[i] === "object"){
            const flattenEle = flattenArray(arr[i]);
            arr.splice(i,1,...flattenEle);
        }
    }
    return arr;
}   
const result = flattenArray([1, [2, [3, [4, [5]]]]]);
console.log(result)
module.exports = flattenArray;
