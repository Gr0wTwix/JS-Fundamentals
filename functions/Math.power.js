function math(number, power) {
    let sum = 1;
    for (let i = 1; i <= power; i++) {
        sum *= number;
    }   
    console.log(sum);
}
math(3, 4);