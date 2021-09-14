function sorting() {
    let phonebook = { 
    'Tim': '0876566344',
    'Bill': '0895695623'};

    let entries = Object.entries(phonebook);
    console.log(entries);

    let firstentry = entries[0];
    console.log(firstentry[0]);
    console.log(firstentry[1]);
    
    entries.sort((a, b) => {
        keyA = a[0];
        keyB = b[0];
    });

    /* 
    entries.sort(([keyA, valueA], [keyB, valueB]) => {
        .....................
    });
    */

}
sorting();