function solve(arr) {
    let step = Number(arr[arr.length - 1]);
    let sum = ``;
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % step == 0) {
            sum += arr[i] + ` `;
        }
    }
    console.log(sum);
}
solve([`dsa`,`asd`,`test`,`test`,`2`]);