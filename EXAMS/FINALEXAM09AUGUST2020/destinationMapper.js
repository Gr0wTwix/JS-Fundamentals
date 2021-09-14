function solve(myString) {
    let regX = /([=\/])[A-Za-z]{3,}\1/;
    let myArray = [];
    let travelPoints = 0;
    
    if (regX.test(myString)) {
        let ourDest = myString.match(regX);
        ourDest.forEach(destination => {
            travelPoints += (destination.length - 2);
            myArray.push(destination.slice(1, (myString.length - 1)));
        })
    }
}
solve(`=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=`);