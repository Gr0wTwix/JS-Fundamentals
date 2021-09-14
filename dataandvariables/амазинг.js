function solve (num) {
// convert to string
let numtostring = num.toString();
let sum = 0
// convert each character to number
for (let i = 0; i < numtostring.length; i++) {
    sum += Number(numtostring[i]);
}
// sum numbers

// convert to string
let sumasstring = sum.toString();
// check if includes 9
let result = sumasstring.includes(`9`);
if (result) {
console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? False`);
}
}
solve(1233);