function formatPhoneNumber(arr) {
    let str1 = "";
    let str2 = "";
    let str3 = "";
    for(let i = 0; i < 3; i++){
        str1+=arr[i];
    }

    for(let i = 3; i < 6; i++){
        str2+=arr[i];
    }

    for(let i = 6; i < 10; i++){
        str3+=arr[i];
    }

    const result = `(${str1}) ${str2}-${str3}`
    return result;
}

module.exports = formatPhoneNumber;
