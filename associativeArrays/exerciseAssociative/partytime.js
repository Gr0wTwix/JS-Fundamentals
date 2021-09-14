function solve(array) {
    let myListParty = {};
    let guest = ``;

    while (guest != `PARTY`) {
        guest = array.shift();
        if (guest === `PARTY`) {
            break;
        } else {
            myListParty[guest] = guest;
        }
    }

    myListParty = Object.keys(myListParty).sort((a, b) => a.localeCompare(b));
    myListParty = JSON.parse(myListParty);

    for (let myGuest of array) {
        if (myListParty.hasOwnProperty(myGuest)) {
            delete myListParty[myGuest];
        }
    }
    
    let sorted = Object.keys(myListParty)
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