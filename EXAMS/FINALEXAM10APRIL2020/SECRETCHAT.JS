function solve(myArray) {
    let myConcealedMessage = myArray.shift();
    let myReversedWord = "";
    let line;

    while ((line = myArray.shift()) !== `Reveal`) {
        let [command, myOtherCommand, replacement] = line.split(":|:");

        switch (command) {
            case "ChangeAll":
                let i = myConcealedMessage.indexOf(myOtherCommand);
                while (i != -1) {
                    myConcealedMessage = myConcealedMessage.substring(0, i) + replacement + myConcealedMessage.substring(i + myOtherCommand.length);
                    i = myConcealedMessage.indexOf(myOtherCommand);
                }
                console.log(myConcealedMessage);
                break;
            case "Reverse":
                if (myConcealedMessage.includes(myOtherCommand)) {
                    let myFirstIndex = myConcealedMessage.indexOf(myOtherCommand);
                    myReversedWord = myOtherCommand.split("").reverse().join("");
                    myConcealedMessage = myConcealedMessage.substring(0,myFirstIndex) + myConcealedMessage.substring(myFirstIndex + myOtherCommand.length) + myReversedWord;
                    console.log(myConcealedMessage);
                } else {
                    console.log(`error`);
                }
                break;
            case "InsertSpace":
                myOtherCommand = Number(myOtherCommand);
                myConcealedMessage = myConcealedMessage.substring(0, myOtherCommand) + ` ` + myConcealedMessage.substring(myOtherCommand);
                console.log(myConcealedMessage);
                break;
        }
    }

    console.log(`You have a new text message: ${myConcealedMessage}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

console.log(`------------`);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
