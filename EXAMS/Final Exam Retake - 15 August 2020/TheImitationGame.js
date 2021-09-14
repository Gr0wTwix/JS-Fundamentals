function solve(myArray) {
    let myEncryptedmessage = myArray.shift();

    for (let each of myArray) {
        let [command, indexOrSubstring, value] = each.split(`|`);

        switch (command) {
            case "ChangeAll":
                let i = myEncryptedmessage.indexOf(indexOrSubstring);
                while (i !== -1) {
                    myEncryptedmessage = myEncryptedmessage.substring(0, i) + value + myEncryptedmessage.substring(i + indexOrSubstring.length);
                    i = myEncryptedmessage.indexOf(indexOrSubstring);
                }
                break;
            case "Insert":
                indexOrSubstring = Number(indexOrSubstring);
                myEncryptedmessage = myEncryptedmessage.slice(0, indexOrSubstring) + value + myEncryptedmessage.substring(indexOrSubstring);
                break;
            case "Move":
                indexOrSubstring = Number(indexOrSubstring);
                let myChar = "";
                let count = 0;
                for (let i = 1; i <= indexOrSubstring; ++i) {
                    myChar += myEncryptedmessage[i - 1];
                    myEncryptedmessage = myEncryptedmessage.slice(i);
                    i--;
                    count++;
                    if (count === indexOrSubstring) {
                        myEncryptedmessage += myChar;
                        break;
                    }
                }
                break;
        }
    }

    console.log(`The decrypted message is: ${myEncryptedmessage}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
console.log(`------------`);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);