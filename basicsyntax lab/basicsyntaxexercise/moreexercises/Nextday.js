function solve(year, month, day) {

let thisdate = new Date(year, month -= 1, day += 1);

let newYear = thisdate.getFullYear();
let newMonth = thisdate.getMonth();
let newDate = thisdate.getDate();
console.log(`${newYear}-${newMonth+1}-${newDate}`);
}
solve(2016, 9, 30);