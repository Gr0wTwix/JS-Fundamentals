function solve(myArray) {
    let numberOfCars = Number(myArray.shift());
    let myListOfCars = [];
    let myObjectForCars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let myStats = myArray.shift();
        myListOfCars.push(myStats);
    }

    for (let each of myListOfCars) {
        let myNewArr = each.split(`|`);
        myObjectForCars[myNewArr[0]] = myObjectForCars[myNewArr[0]] || {};
        myObjectForCars[myNewArr[0]].mileage = Number(myNewArr[1]);
        myObjectForCars[myNewArr[0]].fuel = Number(myNewArr[2]);
    }

    for (let each of myArray) {
        let [command, car, distance, fuel] = each.split(` : `);

        switch (command) {
            case "Drive":
                distance = Number(distance);
                fuel = Number(fuel);

                if (myObjectForCars[car].fuel < fuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    myObjectForCars[car].fuel -= fuel;
                    myObjectForCars[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }

                if (myObjectForCars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete myObjectForCars[car];
                }
                break;
            case "Refuel":
                distance = Number(distance); // 50 , 40 , 90 , 15
                if (myObjectForCars[car].fuel + distance > 75) {
                    let myRefueling = 75 - myObjectForCars[car].fuel;
                    myObjectForCars[car].fuel += myRefueling;
                    console.log(`${car} refueled with ${myRefueling} liters`);
                } else {
                    myObjectForCars[car].fuel += distance;
                    console.log(`${car} refueled with ${distance} liters`);
                }
                break;
            case "Revert":
                distance = Number(distance);
                myObjectForCars[car].mileage -= distance;
                if (myObjectForCars[car].mileage < 10000) {
                    myObjectForCars[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${distance} kilometers`);
                }
                break;
        }
    }

    function sortByMileage(a, b) {
        a = a[1].mileage;
        b = b[1].mileage;
      
        let comp = 0;
      
        if (b > a) {
          comp = 1;
        } else if (b < a) {
          comp = -1;
        }
      
        return comp;
      }

      function sortAlphabetically(a, b) {
        a = a[0];
        b = b[0];
    
        return a.localeCompare(b);
      }


      let array = Object.entries(myObjectForCars).sort((a,b) => sortByMileage(a,b) || sortAlphabetically(a,b));

      for (let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]} -> Mileage: ${array[i][1].mileage} kms, Fuel in the tank: ${array[i][1].fuel} lt.`);
      }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );

