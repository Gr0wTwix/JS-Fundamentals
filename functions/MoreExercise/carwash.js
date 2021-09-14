function solve (arr) {
    function checkIf(something) {
        let value = 0;
        let clean = ``;
        for (let i = 0; i < something.length; i++) {
            clean = arr[i];
            if (clean === `soap`) {
                value += 10;
            } else if (clean === `vacuum cleaner`) {
                value += value*0.25;
            } else if (clean === `mud`) {
                value -= value*0.1;
            } else {
                value += value*0.2;
            }
        }
        return `The car is ${value.toFixed(2)}% clean.`;
    }
    console.log(checkIf(arr));
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);