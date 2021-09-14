function solve(array) {
    let storage = new Map();

    for (let line of array) {
        // parse input
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        // check for existing values
        if (storage.has(product)) {
            let existing = storage.get(product);
            storage.set(product, existing + quantity);
        } else {
            storage.set(product, quantity);
        }
    }
    
    // print result
    
    for (let [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);