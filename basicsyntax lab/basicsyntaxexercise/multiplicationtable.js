function solve(number) {
    number = Number(number);
    for (let i = 1; i <= 10; i++) {
        let sum = number*i
        console.log(`${number} X ${i} = ${sum}`);
    }
}
solve(`5`);