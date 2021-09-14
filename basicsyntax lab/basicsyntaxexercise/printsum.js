function printsum(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let s = "";
    for (let i = num1; i <= num2; i++) {
        sum += i;
        s += i + " ";
    }
    console.log(s);
    console.log(`Sum: ${sum}`);
}
printsum(`5`, `10`);