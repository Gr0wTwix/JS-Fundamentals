function solve(array) {
    let adressBook = {};
    for (let element of array) {
        let [name, adress] = element.split(`:`);
        adressBook[name] = adress;
    }

    let sorted = Object.entries(adressBook);
    sorted.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    });
    // sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name,adress] of sorted) {
        console.log(`${name} -> ${adress}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);