function solving(commands) {
    let arr = commands.shift().split(` `).map(Number);
    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(` `);

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arr.push(firstNum);
                break;
            case "Remove":
                arr.shift(firstNum);
                break;

            case "RemoveAt":
                arr.shift(arr[firstNum]);
                break;

            case "Insert":
                arr.splice(firstNum, 0, secondNum);
                break;
        }
    }

    console.log(arr);
}
solving([`4 19 2 53 6 43`, `Add 3`, `Remove 2`, `RemoveAt 1`, `Insert 8 3`]);