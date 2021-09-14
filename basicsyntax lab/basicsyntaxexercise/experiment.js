function solve(num) {
    num = Number(num);
    let divisible = 0;

    if (num % 10 == 0) {
        divisible = 10;
        console.log(`The number is divisible by ${divisible}`);
    } else if (num % 7 == 0) {
        divisible = 7;
        console.log(`The number is divisible by ${divisible}`);
    } else if (num % 6 == 0) {
        divisible = 6;
        console.log(`The number is divisible by ${divisible}`);
    } else if (num % 3 == 0) {
        divisible = 3;
        console.log(`The number is divisible by ${divisible}`);
    } else if (num % 2 == 0) {
        divisible = 2;
        console.log(`The number is divisible by ${divisible}`);
    } else {
        console.log(`Not divisible`);
    }
}
solve(`15`);