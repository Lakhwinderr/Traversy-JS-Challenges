function countDown(num) {
    if(num < 1){
        console.log("All done!");
        return; 
    }
    console.log(num);
    num--;
    countDown(num);
}

module.exports = countDown;
