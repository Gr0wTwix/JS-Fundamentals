/*
function solve() {
    let myObj = {
        make: `Opel`,
        model: `Zafira`,
        color: `grey`,
        maxSpeed: 180,

        makesound() {
            console.log(`Vroom`);
        }
    };

    console.log(myObj);
    myObj.mileage = 11;  // myObj.[`mileage`] = 11;
    console.log(myObj);



    let objKeys = Object.keys(myObj);
    for (let key of objKeys) {
        let value = myObj[key];
        console.log(`${key} = ${value}`);
    }
}
solve();
*/


function main() {
    let myVar = 5;
    console.log(`Starting value: ` + myVar);
    changeValue(myVar);
    console.log(`New value: ` + myVar);
}

function changeValue(param) {
    param = 6;
    console.log(`Inside function: ` + param);
}

main();


// за масиви .slice(); --- да не променяме референцията
// за обект .assign(); --- да не променяме референцията