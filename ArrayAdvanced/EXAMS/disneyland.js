function solve(array) {
    let moneycost = Number(array.shift());
    let numberofmonths = Number(array.shift());
    let moneycollected = 0;
    let percentage = moneycost * 0.25;

    for (let i = 1; i <= numberofmonths; i++) {
        let bonus = moneycollected * 0.25;

        if (i % 4 === 0) {
            moneycollected += bonus;
        }

        if (i % 2 === 1 && i >= 2) {
            moneycollected -= moneycollected * 0.16
        }

        moneycollected += percentage;
    }

    if (moneycost <= moneycollected) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(moneycollected - moneycost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(moneycost - moneycollected).toFixed(2)}lv. more.`);
    }

}
solve(['3265', '3']);