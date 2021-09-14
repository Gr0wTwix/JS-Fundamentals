function solve(word) {


    function isValidLength(word) {
        if (word.length >= 6 && word.length <= 10) {
            return true;
        } else {
            return `Password must be between 6 and 10 characters`;
        }
    }

    function isValidCharacters(word) {
        let isValidPass = true;
        for (let i = 0; i < word.length; i++) {
            let code = word[i].charCodeAt(0);
            let isValid = true;

            if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }


            return isValidPass ? true : `Password must consist only of letters and digits`;
        }
    }


    function isValidNumbers(word) {
        let digits2 = word.replace(/[^\d.-]/g, '');
        let istrue = true;
        if (digits2.length >= 2) {
            istrue = true;
        } else {
            istrue = false;
        }

        return istrue === true ? true : `Password must have at least 2 digits`;
    }

    let result = [];
    if ( isValidLength(word) !== true) {
        result.push(isValidLength(word));
    } 
    if (isValidCharacters(word) !== true ) {
        result.push(isValidCharacters(word));
    } 
    if (isValidNumbers(word) !== true) {
        result.push(isValidNumbers(word));
    } 
    if (isValidLength(word) === true && isValidCharacters(word) === true && isValidNumbers(word) === true) {
        result.push(`Password is valid`);
    }
    
    return result.join(`\n`);
}
console.log(solve(`Pa$s$s`));