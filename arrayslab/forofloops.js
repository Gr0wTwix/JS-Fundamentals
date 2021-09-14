function solve() {
    let numbers = [1, 2, 3, 4, 5];
    let output = ``;
    for (let number of numbers) {
        console.log(number);
    }
    // правят едно и също нещо
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        console.log(number);
    }
}
solve();