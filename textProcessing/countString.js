function solve(sentence,word) {
    let newArr = sentence.split(' ');
    let counter = 0;
    for (let each of newArr) {
        if (each === word) {
            counter++;
        }
    }
    // let matcher = ` ${word} `;
    // let index = sentence.indexOf(matcher);
    // while (index != -1) {
    //     counter++;
    //     index = text.indexOf(matcher, index + 1);
    // }
    // if (text.startsWith(word)) {
    //     counter++;
    // }
    // if (text.endsWith(word)) {
    //     counter++;
    // }

    console.log(counter);
}
solve("This is a word and it also is a sentence","is");