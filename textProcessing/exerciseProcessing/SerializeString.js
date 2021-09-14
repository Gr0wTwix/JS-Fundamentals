function solve (string) {
    let myArr = [];
    let countArr = [];

    for (let i = 0; i < string.length; i++) {
        if (!myArr.includes(string[i])) {
            myArr.push(string[i]);
        } else {
            countArr.push(i);
        }
    }
    
}
solve(`avjavamsdmcalsdm`);