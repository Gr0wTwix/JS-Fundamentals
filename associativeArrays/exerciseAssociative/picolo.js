function solve(data) {
    let parkingLot = {};

    for (let car of data) {
        let [command, carNumber] = car.split(`, `);
        if (command == "IN") {
            parkingLot[carNumber] = command;
        } else {
            delete parkingLot[carNumber];
        }
    }

    let sorted = Object.keys(parkingLot);

    if (sorted.length <= 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        sorted
        .sort((a, b) => a.localeCompare(b))
        .forEach(element => console.log(element));
    }

}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);