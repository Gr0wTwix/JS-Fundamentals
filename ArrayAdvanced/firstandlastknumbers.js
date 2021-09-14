function solve(arr) {
    let move = arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        let output = arr.slice(i, move + i);
        if (output.length === move) {
            console.log(output.join(` `));
        } else {
            break;
        }
    }
}
/* let k = arr.shift();

let FirstK = arr.slice(0,k);

console.log(FirstK.join(` `));

let LastK = arr.slice(arr.length-k);

console.log(LastK.join(` `));
*/

solve([3,
    6, 7, 8, 9]);