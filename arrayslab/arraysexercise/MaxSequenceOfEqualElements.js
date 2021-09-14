function solve(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let currentsum = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentsum.push(arr[j]);
            } else {
                break;
            }
        }

        if (result.length < currentsum.length) {
            result = currentsum;
        }
    }

    console.log(result.join(` `));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);