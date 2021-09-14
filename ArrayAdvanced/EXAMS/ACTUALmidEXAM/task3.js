function solve(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {

        let [command, message] = array[i].split(` `);
        if (command === `end`) {
            console.log(newArr.join("\r\n"));
            break;
        }
        let editedVersion = ``;
        let spamArray = [];
        if (command === `Edit`) {
            let arr = array[i].split(` `);
            editedVersion = arr.pop();
        } else if (command === `Spam`) {
            let arr = array[i].split(` `);
            for (let i = 2; i < arr.length; i++) {
                spamArray.push(arr[i]);
            }
        }

        let index = 0;

        switch (command) {
            case "Chat":
                newArr.push(message);
                break;
            case "Delete":
                if (newArr.includes(message)) {
                    index = newArr.indexOf(message);
                    newArr.splice(index, 1);
                }
                break;
            case "Edit":
                index = newArr.indexOf(message);
                newArr.splice(index, 1, editedVersion);
                break;
            case "Spam":
                newArr.push(message);
                for (let i = 0; i < spamArray.length; i++) {
                    newArr.push(spamArray[i]);
                }
                break;
            case "Pin":
                index = newArr.indexOf(message);
                newArr.splice(index, 1);
                newArr.push(message);
        }
    }

}
solve(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]
);