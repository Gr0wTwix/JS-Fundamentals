function solve (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let sum = 0;
    let sum2 = 0;
    for (let number of arr) {
        if (number % 2 === 0) {
            sum += number;
        } else {
            sum2 += number;
        }
    }
    console.log(sum-sum2);
}
solve([1,2,3,4,5,6]);