function solve (distance,passengers,liter1) {
let fuel = (distance/100)*7;
let morefuel = passengers*0.1;
let totalfuel = fuel + morefuel;
let money = liter1*totalfuel;
console.log(`Needed money for that trip is ${money}lv.`);
}
solve(260,9,2.49);