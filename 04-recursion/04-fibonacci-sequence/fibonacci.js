function fib(idx, dp){
    if(idx === 0){
        return dp[0]  = 0
    }
    if(idx === 1){
        return dp[1] = 1;
    }
    
    //find fib at idx
    //first check whether value exist if not calculate
    if(dp[idx - 1] < 0){
         fib(idx - 1, dp);
    }
    if(dp[idx - 2] < 0){
        fib(idx -2, dp);
    }
    return dp[idx] = dp[idx -1] +dp[idx - 2];
}

function fibonacci(idx) {
    const dp = new Array(idx + 1).fill(-1);
    fib(idx, dp);
    return dp[idx];
}
console.log(fibonacci(4))
module.exports = fibonacci;
