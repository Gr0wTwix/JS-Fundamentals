function solve(number) {

    // let arr = String(number).split(``);
    let sumeven = 0;
    let sumodd = 0;
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
        let digit = number[i];
        digit = Number(digit);
        if (digit % 2 == 0) {
            sumeven += digit;
        } else {
            sumodd += digit;
        }
    }

    return `Odd sum = ${sumodd}, Even sum = ${sumeven}`;
}
console.log(solve(3495892137259234));