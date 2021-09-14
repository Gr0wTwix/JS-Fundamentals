function softuni(arr) {
    let studentscount = arr.pop();
    let allsum = 0;
    let counter = 0;
    while (allsum < studentscount) {
        allsum += arr.reduce((a,b) => a + b);
        counter++;
        if (counter % 4 === 0) {
            counter++;
        }
    }
    console.log(`Time needed: ${counter}h.`);
}
softuni([3, 2, 5, 40]);