function solve(myArray) {
    let myInteger = Number(myArray.shift());
    let myPattern = /\@\#{1,}[A-Z][a-zA-Z\d]{4,}[A-Z]\@\#{1,}/; // (@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)

    for (let each of myArray) {
        if (myPattern.test(each)) {
            let myNumberArr = each.match(/\d/g);
            if (myNumberArr === null) {
                console.log(`Product group: 00`);
            } else {
                let line = ``;
                for (let each of myNumberArr) {
                    line += each;
                }
                console.log(`Product group: ${line}`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);

console.log(`----`);

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);