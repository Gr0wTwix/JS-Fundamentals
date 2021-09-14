function solve(array) {
    let initialEnergy = Number(array.shift());
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        let energyReduce = array[i];
        if (energyReduce !== `End of battle`) {
            if (initialEnergy - Number(energyReduce) < 0) {
                console.log(`Not enough energy! Game ends with ${counter} won battles and ${initialEnergy} energy`);
                return;
            }
            initialEnergy -= Number(energyReduce);
            counter++;
        } else {
            console.log(`Won battles: ${counter}. Energy left: ${initialEnergy}`);
        }

        if (counter % 3 == 0) {
            initialEnergy += counter;
        }
    }
}
solve(['200', '54', '14', '28', '13', 'End of battle']);