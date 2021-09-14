function solve(number) {
    for (let i = 0; i < number; i++) {
        function rows(number) {
            let sum = [];
            for (let j = 0; j < number; j++) {
                sum.push(number);
            }
            
            console.log(sum.join(` `));
        }
        rows(number);
    }

}
solve(7);