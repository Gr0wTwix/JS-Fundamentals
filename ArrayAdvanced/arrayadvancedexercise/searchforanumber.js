function solve (arr,threenumbers) {
    let elementstotake = threenumbers[0];
    let elementstodelete = threenumbers[1];
    let searchnumber = threenumbers[2];

    let count = 0;

    let newarr = arr.slice(0,elementstotake);
    newarr.splice(0, elementstodelete);
    
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] === searchnumber) {
            count++;
        }
    }

    return `Number ${searchnumber} occurs ${count} times.`
}
console.log(solve([5, 2, 3, 4, 1, 6],[5, 2, 3]));