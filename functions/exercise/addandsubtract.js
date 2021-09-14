function solve(n1, n2, n3) {
    function sum(a,b) {
        return a + b;
    }

    let result = sum(n1,n2);
    return result - n3;
}

console.log(solve(23, 6, 10));
