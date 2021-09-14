function solve(myArray) {
    let myWord = myArray.shift();

    for (let each of myArray) {
        if (each === `Generate`) {
            console.log(`Your activation key is: ${myWord}`);
            break;
        }

        let [command, otherCommandORnumber, myNumber1, myNumberTwo] = each.split(`>>>`);

        switch (command) {
            case "Slice":
                otherCommandORnumber = Number(otherCommandORnumber);
                myNumber1 = Number(myNumber1);
                if ((otherCommandORnumber, myNumber1 >= 0) && (otherCommandORnumber, myNumber1 < myWord.length)) {
                    myWord = myWord.slice(0, otherCommandORnumber) + myWord.slice(myNumber1);
                    console.log(myWord);
                }
                break;
            case "Flip":
                myNumber1 = Number(myNumber1);
                myNumberTwo = Number(myNumberTwo);
                if (otherCommandORnumber === "Upper") {
                    myWord = myWord.slice(0, myNumber1) + myWord.slice(myNumber1, myNumberTwo).toUpperCase() + myWord.slice(myNumberTwo);
                    console.log(myWord);
                } else {
                    myWord = myWord.slice(0, myNumber1) + myWord.slice(myNumber1, myNumberTwo).toLowerCase() + myWord.slice(myNumberTwo);
                    console.log(myWord);
                }
                break;
            case "Contains":
                if (myWord.includes(otherCommandORnumber)) {
                    console.log(`${myWord} contains ${otherCommandORnumber}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
        }
    }
}
solve([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate'
]);