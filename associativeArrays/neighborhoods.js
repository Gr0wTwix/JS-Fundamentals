function solve(array) {
    let map = new Map();
    let neighbors = array[0].split(` `);
    let count = 0;
    for (let everyHood of neighbors) {
        map.set(neighbors, []);
    }

    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(` - `);
        let neighborhood = current.shift();
        let person = current.shift();
        if (neighbors.includes(neighborhood)) {
            map.get(neighborhood).push(person);
            map.set(neighborhood, count++);
        } else {
            map.set(neighborhood, count);
        }
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);