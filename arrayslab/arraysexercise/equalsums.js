function solve(arr) {

    let istrue = false;
    for (let i = 0; i < arr.length; i++) {
        let sum1 = 0;
        let sum2 = 0;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                sum1 += arr[j];
            }
        }

        if (i !== arr.length - 1) {
            for (let r = i + 1; r < arr.length; r++) {
                sum2 += arr[r];
            }
        }

        if (sum1 === sum2) {
            istrue = true;
            console.log(i);
        }
    }

    if (!istrue) {
        console.log(`no`);
    }   
}
solve([1,2,3,3]);