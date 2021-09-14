let myString = `Hello, john@softuni.bg , you have been promoted johnd@softuni.bg`;
// let result = myString.split(".bg").join(`.com.bg`);

let found;
do {
    myString = myString.replace(`.bg`, `.com`);
    found = myString.includes(`.bg`);
} while (found);
// let result = myString.replace(`.bg`, `.com`);
console.log(result);

// let tokens = myString.split(' ').filter(c => c.length > 0);
// Ако имаме 2 интервала - горе 

console.log(`-------------`);

function labMyFunction() {
    let myStr = `Some other text`;
    let word = `text`;
    let StartWord = `Some`;
    console.log(myStr.endsWith(word));
    // console.log(myStr.slice(-word.length) === word);
    console.log(myStr.startsWith(StartWord));
    // console.log(myStr.slice(0, word.length) === word);

    console.log(`---------------`);
    let hour = `14`;
    let minutes = `5`;
    let seconds = `20`;
    // (`0`.repeat(8) + `22`).slice(-8) =  padStart(); 
    let time = `${hour.padStart(2,`0`)}:${minutes.padStart(2,`0`)}:${seconds.padStart(2,`0`)}`;
    console.log(time);
    // Opposite = padEnd();
}
labMyFunction();
