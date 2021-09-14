function solve(gold) {
    let money = gold.shift();
    let counter = 1;
    let totalsum = 0;
    let firstpurchasedbit = 0;
    let totalbitcoins = 0;
    while (money >= 0) {
        if (counter == 3) {
            money = 0.7*money;
        }
        totalsum += money * 67.51;
        if (totalsum >= 11949.16) {
            totalsum -= 11949.16;
            totalbitcoins++;
            firstpurchasedbit = counter;
        }
        Object.freeze(firstpurchasedbit);
        counter++;
        money = gold.shift();
    }

    if (totalbitcoins > 0) {
        console.log(`Bought bitcoins ${totalbitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstpurchasedbit}`);
        console.log(`Left money: ${totalsum.toFixed(2)}lv.`);
    } else {
        console.log(`Bought bitcoins ${totalbitcoins}`);
        console.log(`Left money: ${totalsum.toFixed(2)}lv.`);
    }

}
solve([100, 200, 300]);