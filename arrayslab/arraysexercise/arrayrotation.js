function solve(arr, number) {
    for (let i = 1; i <= number; i++) {
        const el = arr.shift();
        arr.push(el);
    }

    console.log(arr.join(` `));
}
solve([51, 47, 32, 61, 21], 2);