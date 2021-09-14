function solve(number, arr) {
    let input = [];
    let output = '';
    let sum = 0;
    for (let i = 0; i < number; i++) {
        input.push(arr[i]);
    }

    for (let j = input.length - 1; j >= 0; j--) {
        sum += input[j] + output;
    }
    console.log(sum);
}
solve(3, [10, 20, 30, 40, 50]);