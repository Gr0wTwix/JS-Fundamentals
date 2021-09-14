function train(arr) {
    let wagons = arr.shift().split(` `).map(Number);
    let capacity = Number(arr.shift());

    for (let command of arr) {
        let x = command.split(` `);
        if (x[0] == `Add`) {
            let newWagon = Number(command.split(` `)[1]);
            wagons.push(newWagon);
        } else {
            let n = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                let element = wagons[i];
                if (element + n <= capacity) {
                    wagons[i] += n;
                    break;
                }
            }
        }
    }

    return wagons.join(` `);
}
console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));