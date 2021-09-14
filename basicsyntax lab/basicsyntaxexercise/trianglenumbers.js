function solve(number) {
    number = Number(number);
    for (let row = 1; row <= number; row++) {
        let line = "";

        for (let j = 1; j <= row; j++) {
            line += row + " ";

        }
        console.log(line);
    }
}
solve(`3`);