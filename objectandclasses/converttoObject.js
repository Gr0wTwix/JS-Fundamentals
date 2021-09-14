function solve (received) {

    let parsedObject = JSON.parse(received);
    for (let key of Object.keys(parsedObject)) {
        console.log(`${key}: ${parsedObject[key]}`);
    }
}
let input = '{"name": "George", "age": 40, "town": "Sofia"}';
solve(input);