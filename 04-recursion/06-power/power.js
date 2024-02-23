function calcEvenExp(base, exp, dp){
    if(exp === 1){
        return dp[0] = base;
    }
    
    const i =  Math.log(exp)/Math.log(2);
    const newExp=  exp/2;
    const id = Math.log(newExp)/Math.log(2);
    if(dp[id] === 0){
     calcEvenExp(base, newExp, dp);
    }
    
    return dp[i] = dp[id] * dp[id];
}

function power(base, exp) {
    //do it logirathmically
    //two possibilities
    if(exp === 0){
        return 1;
    }
    //exp is even
    let n = 0;
    let result = 0;
    if(exp%2 === 0){
        n = Math.log(exp)/Math.log(2);
        const dp = new Array(n + 1).fill(0);
        calcEvenExp(base, exp, dp);
        result = dp[n]
    }else{
        if(exp === 1){
            return base;
        }
        n = Math.log(exp -1)/Math.log(2);
        const dp = new Array(n+ 1).fill(0);
        calcEvenExp(base, exp - 1, dp);
        result = base * dp[n];
        console.log(dp)
    }
 
    return result;


}

console.log(power(3, 4))
module.exports = power;
