function solve(array) {
    let userNames = array.shift().split(`, `);
    let countBlacklist = 0;
    let countLostnames = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Report") {
            console.log(`Blacklisted names: ${countBlacklist}`);
            console.log(`Lost names: ${countLostnames}`);
            console.log(userNames.join(` `));
            break;
        }

        let [command, n1, n2] = array[i].split(` `);

        let index = 0;

        switch (command) {
            case "Blacklist":
                index = userNames.indexOf(n1);
                if (userNames.includes(userNames[index])) {
                    console.log(`${n1} was blacklisted.`);
                    userNames.splice(index, 1, `Blacklisted`);
                    countBlacklist++;
                } else {
                    console.log(`${n1} was not found.`);
                }
                break;
            case "Error":
                n1 = Number(n1);
                if (userNames[n1] !== `Blacklisted` && userNames[n1] !== "Lost") {
                    console.log(`${userNames[n1]} was lost due to an error.`);
                    userNames.splice(n1, 1, `Lost`);
                    countLostnames++;
                }
                break;
            case "Change":
                n1 = Number(n1);
                if (n1 >= 0 && n1 < userNames.length) {
                    console.log(`${userNames[n1]} changed his username to ${n2}.`);
                    userNames.splice(n1, 1, n2);
                }
        }
    }


}
solve(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Blacklist Eddie",
"Report"]
);