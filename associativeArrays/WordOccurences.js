function solve(array) {
    let myMap = new Map();
    let count = 1;
    for (let each of array) {
        if (myMap.has(each)) {
            let existing = myMap.get(each);
            myMap.set(each, existing + 1);
        } else {
            myMap.set(each, count);
        }
    }
    let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);
    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);