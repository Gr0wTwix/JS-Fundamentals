function solve (array) {
    let name = ``;
    let product = ``;
    let totalprice = 0;
    let finalsum = 0;
    let myRegex = /%[A-Z][a-z]+%([^\|\$%\.]+)?<[A-Za-z]+>([^\|\$%\.]+)?\|[0-9]+\|([^\|\$%\.]+)?[0-9]+(\.[0-9]+)?\$/;

    for (let each of array) {

        if (each === `end of shift`) {
            console.log(`Total income: ${finalsum.toFixed(2)}`);
            break;
        }

        if (myRegex.test(each)) {
            let myPrice = each.match(/\d+[|]\d+[.]\d+/g);
            myPrice = myPrice[0].split(`|`);
            totalprice = Number(myPrice[0])*Number(myPrice[1]);
            finalsum += totalprice;
            let myNames = each.match(/[a-zA-Z]+/g);
            name = myNames.shift();
            product = myNames.shift();
            console.log(`${name}: ${product} - ${totalprice.toFixed(2)}`);
        }
    }
}
solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);