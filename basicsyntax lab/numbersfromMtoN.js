function MtoN(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    for (let i = num1; i >= num2; i--) {
        console.log(i);
    }
}
MtoN(`6`,`2`);