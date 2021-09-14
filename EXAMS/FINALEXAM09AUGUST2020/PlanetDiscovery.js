function solve (myArray) {
    let myNumber = Number(myArray.shift());
    let myObject = {};

    for (let i = 0; i < myNumber; i++) {
        let aPlant = myArray.shift().split(`<->`);
        myObject[aPlant[0]] = aPlant[1];
    }

    for (let each of myArray) {
        let newArr = each.split(' ');
        newArr.splice(2,1);
        let myCommand = newArr.shift();
        let myPlant = newArr.shift();
        let myActualNumber = Number(newArr.shift());
        switch (myCommand) {
            case "Rate:":
                myObject.;
                break;
            case "Update:":
                myObject[myPlant] = myActualNumber;
                break;
            case "Reset:":

        }
    }
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]);