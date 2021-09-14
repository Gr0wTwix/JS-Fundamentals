function solve(number, arr) {
    let input = [];
    for (let i = 0; i < number; i++) {
        input.push(arr[i]);
    }
    let result = ``;
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
        result += ` `;
    }
    console.log(result);
}
solve(3, [10, 20, 30, 40, 50]); 