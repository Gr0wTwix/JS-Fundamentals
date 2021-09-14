function solve(array) {
    let myData = [];
    let istrue = true;

    for (let i = 0; i < array.length; i++) {
        let each = array.shift(); 7
        if (each == `Sail`) {
            break;
        }

        let myArr = each.split(`||`);
        for (let eachOne of myData) {
            if (eachOne[0] === myArr[0]) {
                eachOne[1] = Number(eachOne[1]);
                eachOne[2] = Number(eachOne[2]);
                eachOne[1] += Number(myArr[1]);
                eachOne[2] += Number(myArr[2]);
                istrue = false;
            } else {
                istrue = true;
            }
        }

        if (istrue) {
            myData.push(myArr)
        }
    }

    for (let each of array) {

        if (each == "End") {
            break;
        }

        let [command, city, peopleOrGold, gold] = each.split(`=>`);

        peopleOrGold = Number(peopleOrGold);
        gold = Number(gold);

        switch (command) {
            case "Plunder":
                for (let each of myData) {
                    if (each.includes(city)) {
                        each[1] -= peopleOrGold;
                        each[2] -= gold;
                        console.log(`${each[0]} plundered! ${gold} gold stolen, ${peopleOrGold} citizens killed.`);
                        if (each[1] <= 0 || each[2] <= 0) {
                            console.log(`${each[0]} has been wiped off the map!`);
                            myData.splice(myData.indexOf(each), 1);
                        }
                        break;
                    }
                }
                break;
            case "Prosper":
                for (let each of myData) {
                    if (each.includes(city)) {
                        if (peopleOrGold < 0) {
                            console.log(`Gold added cannot be a negative number!`);
                            break;
                        } else {
                            each[2] = Number(each[2]);
                            each[2] += peopleOrGold;
                            console.log(`${peopleOrGold} gold added to the city treasury. ${each[0]} now has ${each[2]} gold.`);
                            break;
                        }
                    }
                }
                break;
        }
    }


    if (myData.length <= 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${myData.length} wealthy settlements to go to:`);
        myData = myData.sort(numberComparator);
        myData = myData.sort(Comparator);
        for (let each of myData) {
            console.log(`${each[0]} -> Population: ${each[1]} citizens, Gold: ${each[2]} kg`); // {town1} -> Population: {people} citizens, Gold: {gold} kg
        }
    }

    function numberComparator(a, b) {
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
    }

    function Comparator(a, b) {
        if (a[0].localeCompare(b[0])) {
            return -1;
        }
        if (a[0].localeCompare(b[0])) {
            return 1;
        }
       return 0;
    }

}
solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]);