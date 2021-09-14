let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
let pattern = /(is) simply/;

let match = text.match(pattern);
// console.log(match);


// const code = 359;
// const regex0 = /\+?\d{13}/g;
// const regex1 = new RegExp(`\+?${code}+\d{9}, g`);


let text2 = `Peter: 123 Mark: 456`;
let replacement = `999`;
let regex = /\d{3}/g;
// let result = text2.replace(/123/g, replacement);
let result = text2.replace(regex, replacement);
console.log(result);

let text3 = `1    2   3  4 5`;
let regexYes= /\s+/g;
let myResult = text3.split(regexYes);
console.log(myResult);

