function solve(myArray) {
    let myInteger = Number(myArray.shift());
    let myListOfPieces = [];
    let myObjectForPieces = {};

    for (let i = 0; i < myInteger; i++) {
        let myStats = myArray.shift();
        myListOfPieces.push(myStats);
    }

    for (let each of myListOfPieces) {
        let myNewArr = each.split(`|`);
        myObjectForPieces[myNewArr[0]] = myObjectForPieces[myNewArr[0]] || {};
        myObjectForPieces[myNewArr[0]].Composer = myNewArr[1];
        myObjectForPieces[myNewArr[0]].Key = myNewArr[2];
    }

    for (let each of myArray) {
        let [command, piece, composerOrkey, key] = each.split(`|`);

        switch (command) {
            case "Add":
                if (myObjectForPieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    myObjectForPieces[piece] = myObjectForPieces[piece] || {};
                    myObjectForPieces[piece].Composer = composerOrkey;
                    myObjectForPieces[piece].Key = key;
                    console.log(`${piece} by ${composerOrkey} in ${key} added to the collection!`);
                }
                break;
            case "Remove":
                if (myObjectForPieces.hasOwnProperty(piece)) {
                    delete myObjectForPieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (myObjectForPieces.hasOwnProperty(piece)) {
                    myObjectForPieces[piece].Key = composerOrkey;
                    console.log(`Changed the key of ${piece} to ${composerOrkey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
    }

    function sortAlphabetically(a, b) {
        a = a[0];
        b = b[0];
    
        return a.localeCompare(b);
      }

      let array = Object.entries(myObjectForPieces).sort((a,b) => sortAlphabetically(a,b));

      for (let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]} -> Composer: ${array[i][1].Composer}, Key: ${array[i][1].Key}`);
      }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
console.log(`----------------------------------------------------------------`);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);