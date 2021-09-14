function solve(array) {
    let str = array.split(` `);

    let myObject = new Map();

    for (let word of str) {

        word = word.toLowerCase();

        if (!myObject.has(word)) {
            myObject.set(word, 0);
        }

        let newVal = myObject.get(word) + 1
        myObject.set(word, newVal);
    }

    let newArray = Array.from(myObject.keys())
    .filter( x => myObject.get(x) % 2 !== 0);
    console.log(newArray.join(` `));

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');