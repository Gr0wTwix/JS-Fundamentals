function solve(number) {
    let digit = 0;
    let sum = 0;
    let thestringnumber = number.toString();
    
    while (sum <= 5) {
        for (let i = 0; i < thestringnumber.length; i++) {
            digit = thestringnumber[i];
            digit = Number(digit);
            sum += digit;
            if (sum / thestringnumber.length > 5) {
                console.log(thestringnumber);
                break;
            }
        }
        if (sum / thestringnumber.length <= 5) {
            thestringnumber += `9`;
            sum = 0;
        }
    }

}
solve(5835);