function removeDuplicates(arr) {
//     const newArr = [];
//    arr.forEach(e => {
//     if(!newArr.includes(e)){
//         newArr.push(e)
//     }

    
//    })
   return Array.from(new Set(arr));
}
module.exports = removeDuplicates;
