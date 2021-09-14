function solve() {
    /*
       let assocArr = {
           'one': 1,
           'two': 2,
           'three': 3,
           [key]: 6
       }
   
       assocArr['four'] = 4;
       assocArr.five = 5;
       let key = 'six';
       assocArr[key] = 6;
   
   
       let assocArr = {};
       assocArr.John = '+1-888-555-4676';
       assocArr['John Smith'] = '+1-888-555-4676';
       assocArr['John'];  - `+1-888-555-4676`;
    */

    let assocArr = {};
    assocArr['one'] = 1;
    assocArr['two'] = 2;
    assocArr['three'] = 3


    let keys = Object.keys(assocArr);

    for (let key of keys) {  // same as Object.keys(assocArr)
        console.log(`${key} -> ${assocArr[key]}`);
    }

    console.log(`-------`);

    for (let key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }
    
    console.log(`-------`);

    for (let [key, value] of Object.entries(assocArr)) {
        console.log(key,value);
    }
    
    
}
solve();