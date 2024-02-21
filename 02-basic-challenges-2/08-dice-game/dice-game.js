function diceGameSimulation(n) {
   
   const resultArr= [];
   const win = new Set([7,11]);
   const lose = new Set([2,3,12]);
    for(let i =0; i < n; i++){
        const dice1 = Math.floor(Math.random()*6) + 1;
        const dice2 = Math.floor(Math.random()*6) + 1;
        const sum = dice1 + dice2;
        const result = win.has(sum) ? "win" : (lose.has(sum) ? "lose" : "roll again");
        const obj = { 
            dice1 : dice1,
            dice2 : dice2,
            sum: sum,
            result : result
        }
        resultArr.push(obj);
    }

    // console.log(resultArr);
    return resultArr;


}

diceGameSimulation(3)
module.exports = diceGameSimulation;
