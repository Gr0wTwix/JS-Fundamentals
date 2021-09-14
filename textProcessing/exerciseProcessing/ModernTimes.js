function modernTimestag (string) {
    // string = string.split(` `);
    // for (let word of string) {
    //     if (word.startsWith(`#`) && word.length > 1) {
    //         let index = word.indexOf('#');
    //         word = word.substring(0, index) + word.substring(index + 1);
    //         let isTrue = true;
    //         for (let i = 0; i < word.length; i++) {
    //             if (!isLetter(word[i])) {
    //                isTrue = false;
    //             }
    //         }

    //         if (isTrue) {
    //             console.log(word);
    //         }
    //     }
    // }

    // function isLetter(str) {
    //     return str.length === 1 && str.match(/[a-z]/i);
    //   }

    
    string = string.split(' ');
    string.forEach( word =>  {
        if (word[0] === '#' && word.length > 1) {
            let index = word.indexOf('#');
            word = word.substring(0, index) + word.substring(index + 1);
            let isTrue = true;
            for (let letter of word) {
                if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 || letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
                    isTrue = true;
                } else {
                    isTrue = false;
                    break;
                }
            }

            if (isTrue) {
                console.log(word);
            }
        }
    });
}
modernTimestag('Nowadays everyone uses # to tag a #special word in #socialMedia');