function solve(word,wordToRemoveFrom) {
    let old = ``;
    while (old !== wordToRemoveFrom) {
        old = wordToRemoveFrom;
        wordToRemoveFrom = wordToRemoveFrom.replace(word, ``);
    }
    console.log(wordToRemoveFrom);
}
solve(`ice`,`kicegiciceeb`);