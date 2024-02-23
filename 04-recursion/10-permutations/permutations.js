function permutations(str) {
  
    if(str.length < 2){
        return [str];
    }
    const permutation = []
    for(let i = 0; i < str.length; i++){
        permutations(str.slice(0, i) + str.slice(i+1)).forEach(p => permutation.push(str[i] + p))
        
    }
    return permutation;
}   
// console.log(permutations("dog"))
module.exports = permutations;
