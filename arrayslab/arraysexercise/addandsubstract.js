function solve(arr) {
    let sum = 0;
    let sum2 = 0;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
            arr[i] += i;
            output.push(arr[i]);
            sum2 += arr[i];
        } else {
            sum += arr[i];
            arr[i] -= i;
            output.push(arr[i]);
            sum2 += arr[i];
        }
    }
    console.log(output);
    console.log(sum);
    console.log(sum2);
}
solve([5, 15, 23, 56, 35]);