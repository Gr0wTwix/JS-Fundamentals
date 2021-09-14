function solve(myArray) {
    let myString = myArray.shift();
    let concatinatedLine = ``;
    for (let each of myArray) {
        let [command, indexOrSubstring, subOrlength] = each.split(` `);
        switch (command) {
            case "TakeOdd":
                for (let i = 0; i < myString.length; i++) {
                    if (i % 2 == 1) {
                        concatinatedLine += myString[i];
                    }
                }
                myString = concatinatedLine;
                console.log(myString);
                break;
            case "Cut":
                indexOrSubstring = Number(indexOrSubstring);
                subOrlength = Number(subOrlength);
                myString = myString.substring(0, indexOrSubstring) + myString.substring(indexOrSubstring + subOrlength);
                console.log(myString);
                break;
            case "Substitute":
                let i = myString.indexOf(indexOrSubstring);
                if (i > -1) {
                    while (i != -1) {
                        myString = myString.substring(0, i) + subOrlength + myString.substring(i + indexOrSubstring.length);
                        i = myString.indexOf(indexOrSubstring);
                    }
                    console.log(myString);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
    }
    console.log(`Your password is: ${myString}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);