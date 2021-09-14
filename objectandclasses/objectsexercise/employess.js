function solve(array) {
    let employess = {};
 
    for (const line of array) {
        employess[line] = line.length;
    }

    /* 
    Object.entries(employess).forEach(element => {
        console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);
    })
    */
   
    let employessnames = Object.keys(employess);
    let employessnumber = Object.values(employess);

    for (let i = 0; i < employessnames.length; i++) {
        console.log(`Name: ${employessnames[i]} -- Personal Number: ${employessnumber[i]}`);
    }
}
solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);