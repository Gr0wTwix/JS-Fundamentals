function solve(percents) {
    function creatingarray(percents) {
        let arr = [];
        for (let i = 1; i <= 10; i++) {
            arr.push(`.`);
        }


        for (let i = 1; i <= percents / 10; i++) {
            arr.splice(0, 0, `%`);
            arr.pop();
        }

        function checkIf(percents) {
            if (percents === 100) {
                console.log(`${percents}% Complete!`);
                console.log(`[${arr.join(``)}]`);
            } else {
                console.log(`${percents}% [${arr.join(``)}]`);
                console.log(`Still loading...`);
            }
        }
        checkIf(percents);
    }
    creatingarray(percents);
}
solve(100);