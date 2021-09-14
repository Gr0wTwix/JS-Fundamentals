function solve(string) {
    let myNewString = string[0];
    let newArr = [];
    string = string.slice(1);
    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === string[i].toUpperCase()) {
            newArr.push(myNewString);
            myNewString = '';
            myNewString += string[i];
        } else {
            myNewString += string[i];
        }

        if (i === string.length - 1) {
            newArr.push(myNewString);
        }
    }

    console.log(newArr.join(', '));
}
solve(`SplitMeIfYouCanHaHaYouCantOrYouCan`);