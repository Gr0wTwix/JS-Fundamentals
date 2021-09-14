function solve(arr) {
    

    for (let j = 0; j <= arr.length - 1; j++) {
       let index = arr.indexOf(arr[j], j+1);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arr[j], j+1);
        }
    }

    return arr.join(` `);
}
console.log(solve([20, 8, 12, 13, 4, 4, 8, 5]));