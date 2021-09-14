function solve(myPhones) {
    let myPattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let getNumbers = [];
    while ((getNumber = myPattern.exec(myPhones)) !== null) {
        getNumbers.push(getNumber[0]);
    }
    console.log(getNumbers.join(', '));


}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");