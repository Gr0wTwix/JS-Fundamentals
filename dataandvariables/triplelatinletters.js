function solve(n) {

    
    for (let a = 0; a < n; a++) {
        let letter = String.fromCharCode(97 + a);
        for (let b = 0; b < n; b++) {
            let letter2 = String.fromCharCode(97 + b);
            for (let c = 0; c < n; c++) {
                let letter3 = String.fromCharCode(97 + c);
                console.log(`${letter}${letter2}${letter3}`);
            }
        }
    }
}
solve(3);