function solve (string,possibleInput) {
    let sum = 0;
    for (let letter of string) {
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 || letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
            if (possibleInput == `LOWERCASE`) {
                if (letter.toLowerCase()) {
                    sum += letter.charCodeAt();
                }
            } else {
                if (letter.toUpperCase()) {
                    sum += letter.charCodeAt();
                }
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
solve(`AC/DC`, `UPPERCASE`);