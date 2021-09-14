function repeat(string, n) {
    let result = ``
    for (let i = 1; i <= n; i++) {
        result += string;
    }
    console.log(result);
}
repeat(`abc`, 3);