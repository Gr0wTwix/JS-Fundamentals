function arraymodifier(commands) {
    let arr = commands.shift().split(` `).map(Number);
    for (let i = 0; i < commands.length; i++) {

        let [command, firstNum, secondNum] = commands[i].split(` `);

        switch (command) {
            case "swap":
                let temp = Number(arr[firstNum]);
                arr[firstNum] = arr[secondNum];
                arr[secondNum] = temp;
                break;

            case "multiply":
                arr.splice(firstNum, 1, arr[firstNum]*arr[secondNum]);
                break;

            case "decrease":
                for (let i = 0; i < arr.length; i++) {
                    arr[i]--;
                }
                break;
        }
    }
    console.log(arr.join(`, `));

}
arraymodifier( ['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1','decrease','end']  );