function solve(array) {
    let listGroceries = array.shift().split(`!`);
    for (let commands of array) {
        let [command, firstItem, secondItem] = commands.split(` `);

        switch (command) {
            case "Unnecessary":
                if (listGroceries.includes(firstItem)) {
                    let index = listGroceries.indexOf(firstItem);
                    listGroceries.splice(index, 1);
                }
                break;
            case "Urgent":
                if (!(listGroceries.includes(firstItem))) {
                    listGroceries.unshift(firstItem);
                }
                break;
            case "Rearrange":
                if (listGroceries.includes(firstItem)) {
                    let index = listGroceries.indexOf(firstItem);
                    listGroceries.splice(index, 1);
                    listGroceries.push(firstItem);
                }
                break;
            case "Correct":
                if (listGroceries.includes(firstItem)) {
                    let index = listGroceries.indexOf(firstItem);
                    listGroceries.splice(index, 1, secondItem);
                }
                break;
        }
    }

    console.log(listGroceries.join(`, `));

}
solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]);