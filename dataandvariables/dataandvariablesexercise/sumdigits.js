function solve(n) {
    let sum = 0;
    while (n) {
        sum += n%10;
        n = Math.floor(n/10);
    }
    console.log(sum);
}
solve(245678);