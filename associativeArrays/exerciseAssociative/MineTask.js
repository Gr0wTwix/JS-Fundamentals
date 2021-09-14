function solve(array) {
    let myMineMap = new Map();
    let arrNumbers = [];
    let resource = ``;
    let quantity = 0;

    for (let line of array) {
        if (Number(line) >= 0) {
            let aNumber = Number(line);
            let indexOffind = array.indexOf(line);
            array.splice(indexOffind, 1);
            arrNumbers.push(aNumber);
        }
    }

    for (let i = 0; i < array.length; i++) {
        resource = array[i];
        quantity = arrNumbers[i];
        if (myMineMap.has(resource)) {
            let existing = myMineMap.get(resource);
            myMineMap.set(resource, existing + quantity);
        } else {
            myMineMap.set(resource, quantity);
        }
    }

    for (let [resource, quantity] of myMineMap) {
        console.log(`${resource} -> ${quantity}`);
    }

}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]    
    );