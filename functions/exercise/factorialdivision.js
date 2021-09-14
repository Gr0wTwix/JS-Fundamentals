function solve(number1,number2) {

    function factorial(n1,n2) {
        let firstsum = 1;
        let secondsum = 1;
        for (let i = 1; i <= n1; i++) {
            firstsum *= i;
        }

        for (let j = 1; j <= n2; j++) {
            secondsum *= j;
        }

        let result = (firstsum/secondsum).toFixed(2);
        return result;
    }
    console.log(factorial(number1,number2));
}
solve(6,2);