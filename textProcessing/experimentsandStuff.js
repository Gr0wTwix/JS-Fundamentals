function solve(text, word) {
    let counter = 0;
    let matcher = ` ${word} `;
    let index = text.indexOf(matcher);
    while (index != -1) {
        counter++;
        index = text.indexOf(matcher, index + 1);
    }
    if (text.startsWith(word)) {
        counter++;
    }
    if (text.endsWith(word)) {
        counter++;
    }

    console.log(counter);
}
solve("This is a word and it also is a sentence", "is");