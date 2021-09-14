function solve(array) {
    let newArr = array.map(Number);
    let peoplecount = newArr.pop();
    let counter = 0;

    while (peoplecount > 0) {
        peoplecount -= newArr.reduce((a, b) => a + b);
        counter++;

        if (counter % 4 == 0) {
            counter++;
        }
    }
    
    console.log(`Time needed: ${counter}h.`);
}
solve(['1', '2', '3', '45']);