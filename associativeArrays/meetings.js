function solve(array) {
    let collection = {};

    for (let each of array) {
        let [day, name] = each.split(' ');
        if (collection.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            collection[day] = name;
        }
    }

    for (let key in collection) {
        console.log(`${key} -> ${collection[key]}`);
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);