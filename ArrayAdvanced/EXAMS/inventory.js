function solve(array) {
    let collectingItems = array.shift().split(`, `);

    for (let commands of array) {

        let [command, firstItem, secondItem] = commands.split(` - `);

        if (command === `Combine Items`) {
            let newArr = firstItem.split(`:`);
            firstItem = newArr.shift();
            secondItem = newArr.shift();
        } else if (command === `Craft!`) {
            console.log(collectingItems.join(`, `));
        }

        switch (command) {
            case "Collect":
                if (!(collectingItems.includes(firstItem))) {
                    collectingItems.push(firstItem);
                }
                break;
            case "Drop":
                if (collectingItems.includes(firstItem)) {
                    let index = collectingItems.indexOf(firstItem);
                    collectingItems.splice(index, 1);
                }
                break;
            case "Combine Items":
                if (collectingItems.includes(firstItem)) {
                    let index = collectingItems.indexOf(firstItem);
                    collectingItems.splice(index + 1, 0, secondItem);
                }
                break;
            case "Renew":
                if (collectingItems.includes(firstItem)) {
                    let index = collectingItems.indexOf(firstItem);
                    let item = collectingItems[index];
                    collectingItems.splice(index, 1);
                    collectingItems.push(item);
                }
        }
    }
}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );