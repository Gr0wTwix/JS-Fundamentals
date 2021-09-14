function solve(myArray) {
    let myN = Number(myArray.shift());
    let myPattern = /^([$%]{1})[A-Z][a-z]{2,}\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$/g;

    for (let i = 0; i < myN; i++) {
        let myLine = myArray[i];
        if (myLine.match(myPattern)) {
            let decryptedMessage = "";
            let myTag = myLine.split(/[$|\%]/)[1];
            let myIndexOf = myLine.indexOf(`[`);
            let myNumbers = myLine.slice(myIndexOf).split(`|`);
            for (let i = 0; i < myNumbers.length - 1; i++) {
                let myNumber = Number(myNumbers[i].slice(1, myNumbers[i].length - 1));
                decryptedMessage += String.fromCharCode(myNumber);
            }
            console.log(`${myTag}: ${decryptedMessage}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);

solve([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
]);