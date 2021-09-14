function solve(daysPlunder,dailyPlunder,expectedPlunder) {
    daysPlunder = Number(daysPlunder);
    dailyPlunder = Number(dailyPlunder);
    expectedPlunder = Number(expectedPlunder);
    let sumPlunder = 0;

    for (let i = 1; i <= daysPlunder; i++) {
        sumPlunder += dailyPlunder;
        if (i % 3 == 0) {
            sumPlunder += dailyPlunder/2;
        } else if (i % 5 == 0) {
            sumPlunder -= sumPlunder * 0.3;
        }
    }

    if (sumPlunder >= expectedPlunder) {
        return `Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`;
    } else {
        let percentage = Math.abs(((expectedPlunder - sumPlunder)/expectedPlunder * 100)-100)
        return `Collected only ${percentage.toFixed(2)}% of the plunder.`;
    }
}
console.log(solve(`10`,`20`,`380`));