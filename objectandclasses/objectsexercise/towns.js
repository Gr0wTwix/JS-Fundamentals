function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let newarray = arr[i].split(`|`);
        let first = Number(newarray[1]).toFixed(2);
        let second = Number(newarray[2]).toFixed(2);
        let personInfo = {
            town: newarray[0].trim(),
            latitude: first,
            longitude: second
        }
        console.log(personInfo);
    }
}
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])