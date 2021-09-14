function solve(arr) {
    let firstdigit = ``;
    let lastdigit = ``;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        number = number.toString();
        firstdigit = number[0];
        lastdigit = number[number.length - 1];
        if (firstdigit === lastdigit) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }


    //     let result = ``;
    //     for (let num of arr) {
    //      let isPolindrom = `true`;
     //     let str = String(num);
     //     let reversedStr = str.split(``).reverse().join(``);
      //    isPolindrom = str === reversedStr ? `true` : `false`;
      //    result += isPolindrom + `\n`;
    //     }
    //     return result;
}
solve([32,2,232,1010]);