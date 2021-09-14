function solve(n) {
    n = Number(n);
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            counter++;
            console.log(i);
            sum += i;
        }

        if (counter == n) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(`5`);