function solve(arr) {
    let username = arr.shift();
    let pass = username.split(``).reverse().join(``);
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter++;
        if (arr[i] === pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }

}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);