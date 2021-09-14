function solve(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        let digit = number / i;
        if (digit % 1 === 0) {
            sum += i;
        }
    }
    function forSum(number) {
        return sum === number ? `We have a perfect number!` : `It's not so perfect.`;
    }

    console.log(forSum(number));

}
solve(1236498);