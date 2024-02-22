function validateEmail(str) {
    // //using simple loop
    // let cond1 = false;
    // let cond2 = false;
    // for(letter of str){
    //     if(letter == '@'){
    //         cond1 = true;
    //     }
    //     if(letter == '.'){
    //         cond2 = true;
    //     }
    // }
    // return cond1 && cond2;

    //using regex method;
    const regex = /@./;
    return regex.test(str)
}

module.exports = validateEmail;
