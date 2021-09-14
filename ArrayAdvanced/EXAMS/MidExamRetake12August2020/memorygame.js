function memoryGame(array) {
    let myNumbers = array.shift().split(` `);
    let moves = 0;

    for (let numbers of array) {

        if (myNumbers.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        } else if (numbers === `end`) {
            console.log(`Sorry you lose :(`);
            console.log(myNumbers.join(` `));
            break;
        }

        let [firstIndex, secondIndex] = numbers.split(` `);

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);
        
        if (myNumbers[firstIndex] === myNumbers[secondIndex]) {
            moves++;
            console.log(`Congrats! You have found matching elements - ${myNumbers[firstIndex]}!`);
            if (firstIndex < secondIndex) {
                myNumbers.splice(firstIndex, 1);
                myNumbers.splice(secondIndex - 1, 1);
            } else {
                myNumbers.splice(secondIndex, 1);
                myNumbers.splice(firstIndex - 1, 1);
            }
        } else if (firstIndex < 0 || secondIndex < 0 || firstIndex === secondIndex || firstIndex >= myNumbers.length || secondIndex >= myNumbers.length) {
            moves++;
            console.log(`Invalid input! Adding additional elements to the board`);
            myNumbers.splice(Math.trunc(myNumbers.length / 2), 0, `-${moves}a`);
            myNumbers.splice(Math.trunc(myNumbers.length / 2), 0, `-${moves}a`);
        } else if (myNumbers[firstIndex] !== myNumbers[secondIndex]) {
            console.log(`Try again!`);
        }
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);