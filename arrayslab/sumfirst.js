function solve (arr) {
    let number1 = Number(arr.shift());
    let number2 = Number(arr.pop());
    console.log(number1+number2);

}
solve([`20`,`30`,`40`]);