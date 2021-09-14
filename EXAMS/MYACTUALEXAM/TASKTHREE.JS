function solve(myArray) {
    let myGuestObject = {};
    let countNotlike = 0;

    for (let each of myArray) {
        let [command, guestSname, myMeal] = each.split(`-`);

        switch (command) {
            case "Like":
                if (!myGuestObject.hasOwnProperty(guestSname)) {
                    myGuestObject[guestSname] = [];
                    myGuestObject[guestSname].push(myMeal);
                } else {
                    if (!myGuestObject[guestSname].includes(myMeal)) {
                        myGuestObject[guestSname].push(myMeal);
                    }
                }
                break;
            case "Unlike":
                if (!myGuestObject.hasOwnProperty(guestSname)) {
                    console.log(`${guestSname} is not at the party.`);
                } else {
                    if (!myGuestObject[guestSname].includes(myMeal)) {
                        console.log(`${guestSname} doesn't have the ${myMeal} in his/her collection.`);
                    } else {
                        let myIndex = myGuestObject[guestSname].indexOf(myMeal);
                        myGuestObject[guestSname].splice(myIndex, 1);
                        countNotlike++;
                        console.log(`${guestSname} doesn't like the ${myMeal}.`);
                    }
                }
                break;
        }
    }

    function sortAlphabetically(a, b) {
        a = a[0];
        b = b[0];
    
        return a.localeCompare(b);
      }

      function sortByCount(a, b) {
        a = a[1].length;
        b = b[1].length;
      
        let comp = 0;
      
        if (b > a) {
          comp = 1;
        } else if (b < a) {
          comp = -1;
        }
      
        return comp;
      }

      let array = Object.entries(myGuestObject).sort((a,b) => sortByCount(a,b) || sortAlphabetically(a,b));

      for (let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]}: ${array[i][1].join(`, `)}`);
      }

      console.log(`Unliked meals: ${countNotlike}`);
}
solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Penelope-dessert',
    'Stop'
]);

solve([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]);

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);