function solve(array) {
    let targetsSequence = array.shift().split(` `).map(Number);
    let myNumber = 0;
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        if (index === `End`) {
            console.log(`Shot targets: ${counter} -> ${targetsSequence.join(` `)}`);
            break;
        }
        myNumber = targetsSequence[Number(index)];
        if (myNumber !== undefined) {
            targetsSequence[index] = -1;
            counter++;
        }
        for (let j = 0; j < targetsSequence.length; j++) {
            if (myNumber < targetsSequence[j]) {
                targetsSequence[j] -= myNumber;
            } else {
                if (targetsSequence[j] !== -1 && myNumber !== undefined) {
                    targetsSequence[j] += myNumber;
                }
            }
        }
    }
}
solve([`24 50 36 70`, `0`, `4`, `3`, `1`, `End`]);