function solve(text, word) {
    // find index of word 
    let start = text.indexOf(word);
    while (start !== -1) {
        // take substring ending at index
        let first = text.substring(0, start);
        let second = text.substring(start + word.length);
        // concat asterisks
        text = first + `*`.repeat(word.length) + second;
        start = text.indexOf(word);
    }

    console.log(text);

    // text.split(word).join(`*`.repeat(word.length));
}
solve("A small sentence with some words", "small");