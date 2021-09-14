function solve(n1, n2, operator) {
    let result = 0;
    if (operator === `multiply`) {
        result = n1 * n2;
        console.log(result);
    } else if (operator === `divide`) {
        result = n1 / n2;
        console.log(result);
    } else if (operator === `add`) {
        result = n1+n2;
        console.log(result);
    } else {
        result = n1-n2;
        console.log(result);
    }
}
solve(5, 5, `multiply`);