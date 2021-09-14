function solve(myArray) {

    let myListStops = myArray.shift();

    for (let each of myArray) {

        if (each === `Travel`) {
            console.log(`Ready for world tour! Planned stops: ${myListStops}`);
            break;
        }

        let [command, destination, destination2] = each.split(':');

        switch (command) {
            case "Add Stop":
                destination = Number(destination);
                if (destination >= 0 && destination <= myListStops.length - 1) {
                    myListStops = myListStops.slice(0, destination) + destination2 + myListStops.slice(destination);
                }
                console.log(myListStops);
                break;
            case "Remove Stop":
                destination = Number(destination);
                destination2 = Number(destination2);
                if ((destination, destination2 >= 0) && (destination, destination2 <= myListStops.length - 1)) {
                    myListStops = myListStops.slice(0, destination) + myListStops.slice(destination2 + 1);
                }
                console.log(myListStops);
                break;
            case "Switch":
                if (myListStops.includes(destination)) {
                    myListStops = myListStops.replace(destination, destination2);
                }
                console.log(myListStops);
                break;
        }
    }
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);