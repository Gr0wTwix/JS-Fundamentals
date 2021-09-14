function solve() {
    let map = new Map();
    map.set(1, "one"); // key - 1, value - one
    map.set(2, "two"); // key - 2, value - two

    map.get(2); // two 
    map.get(1); // one

    map.has(2); // true
    map.has(4); // false

    // map.delete(1) - Removes 1 from the map

    // .clear() - Removes all elements from the map


    let myMap = new Map();
    myMap.set("Tim", '+1-888-7915');
    myMap.set("Bob", '+1-950-3262');
    myMap.set("Peter", '+1-236-5622');

    console.log(myMap.has(`Bob`));

    console.log(myMap.get('Bob'));

    // myMap.delete('Bob');

    console.log(myMap.has(`Bob`));
    
    console.log(`------------------------------------------------`); 

    let entries = Array.from(myMap.entries()); // [ [2, 'two'], [3, 'three'] ]
    let keys = Array.from(myMap.keys()); // [2,3]
    let values = Array.from(myMap.values()); // ['two', 'three']

    for (let [name,phone] of myMap) {
        console.log(name, phone);
    }

    console.log(`------------------------------------------------`);
     
    let myKeys = [...myMap.keys()];
    console.log(myKeys);
    

}
solve();