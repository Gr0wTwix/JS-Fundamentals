function solve(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        let isbigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isbigger = false;
                break;
            }
        }

        if (isbigger) {
            sum.push(arr[i]);
        }
    }
    console.log(sum.join(` `));
}
solve([14, 24, 3, 19, 15, 17]);