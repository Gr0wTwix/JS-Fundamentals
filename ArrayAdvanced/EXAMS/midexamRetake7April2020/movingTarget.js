function solve(array) {
    let targetsSequence = array.shift().split(` `).map(Number);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "End") {
            console.log(targetsSequence.join(`|`));
            break;
        }

        let [command, n1, n2] = array[i].split(` `);

        n1 = Number(n1);
        n2 = Number(n2);

        switch (command) {

            case "Shoot":
                if (!(targetsSequence[n1] === undefined)) {
                    let ind = targetsSequence[n1];
                    ind = ind - n2;
                    if (ind <= 0) {
                        targetsSequence.splice(n1, 1);
                    } else {
                        targetsSequence.splice(n1, 1, ind);
                    }
                    break;
                } else {
                    break;
                }
            case "Add":
                if (n1 < targetsSequence.length && n1 >= 0) {
                    targetsSequence.splice(n1, 0, n2);
                    break;
                } else {
                    console.log(`Invalid placement!`);
                    break;
                }
            case "Strike":
                if (n1 + n2 <= targetsSequence.length - 1 && n1 - n2 >= 0) {
                    targetsSequence.splice(n1 - n2, n2 * 2 + 1);
                    break;
                } else {
                    console.log(`Strike missed!`);
                    break;
                }
        }
    }

}
solve([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);