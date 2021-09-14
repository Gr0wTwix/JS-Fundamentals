function solve(arr) {
    let peopleWaiting = Number(arr.shift());
    let array = arr[0].split(` `).map(Number);

    for (let i = 0; i < array.length; i++) {
        if (peopleWaiting <= 0) {
            break;
        }
        peopleWaiting -= 4 - array[i];
        array[i] += 4 - array[i];
        if (peopleWaiting < 0) {
            array[i] += peopleWaiting;
            peopleWaiting = 0;
        }
    }

    if (peopleWaiting <= 0 && array[array.length - 1] !== 4) {
        console.log(`The lift has empty spots!`);
        console.log(array.join(` `));
    } else if (peopleWaiting > 0 && array[array.length - 1] === 4) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(array.join(` `));
    } else {
        console.log(array.join(` `));
    }

}
solve(["20", "0 2 0"]);