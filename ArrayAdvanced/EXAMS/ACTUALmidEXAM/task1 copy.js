function solve(days,daliyPlunder,goal) {
    let result = 0;
    for (let i = 1; i <= days; i++) {
        result += daliyPlunder;

        if (i % 3 === 0) {
            result += daliyPlunder * 0.50;
        }
        if (i % 5 === 0) {
            result -= result * 0.30;
        }
    }
    if (result >= goal) {
        return `Ahoy! ${result.toFixed(2)} plunder gained.`;
    } else {
        return `Collected only ${((result / goal) * 100).toFixed(2)}% of the plunder.`;
    }
}
console.log(solve(`10`,`20`,`380`));