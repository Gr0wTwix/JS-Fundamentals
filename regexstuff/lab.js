let pattern = /[A-Za-z]+/g;

let newRegex = new RegExp(`\\d{4}-\\d{2}-\\d{2}`,`g`);

let word = `Microsoft45\\asd[';'l[]]`;

let otherWord = `Today's date is 2019-05-11`;

let isitTrue = pattern.test(word);

let isitTrue2 = newRegex.test(otherWord);

if (isitTrue) {
    console.log(word);
} else if (isitTrue2) {
    console.log(otherWord);
}