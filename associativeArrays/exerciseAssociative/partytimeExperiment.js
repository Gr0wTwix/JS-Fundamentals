function solve(array) {
    let indexOfParty = array.indexOf(`PARTY`);
    let newArray = array.slice(indexOfParty + 1, array.length);
    array.splice(indexOfParty);


    let myListParty = {};

    for (let guest of array) {
        myListParty[guest] = guest;
    }

    let sorted = Object.keys(myListParty).sort((a, b) => ((typeof b === "number") - (typeof a === "number")) || (a < b ? 1 : -1));

    for (let myGuest of newArray) {
        if (sorted.includes(myGuest)) {
            let findIndexOf = sorted.indexOf(myGuest);
            sorted.splice(findIndexOf, 1);
        }
    }

    console.log(sorted.length);
    sorted.forEach(el => console.log(`${el}`));
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);