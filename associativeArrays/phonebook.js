function book(array) {
    let collection = {};
    for (let element of array) {
        let tokens = element.split(` `);
        let name = tokens[0];
        let phone = tokens[1];
        collection[name] = phone;
    }

    for (let key in collection) {
        console.log(`${key} -> ${collection[key]}`);
    }

}
book(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);