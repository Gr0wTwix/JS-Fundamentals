function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num2 > 15) {
        num2 = 15;
    }
    console.log(`${parseFloat(num1.toFixed(num2))}`);
}
solve(`10.5`, `3`);