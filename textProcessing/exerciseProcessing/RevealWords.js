function revealWord(words, str) {
    words = words.split(', ');
    str = str.split(` `);

    for (let word of words) {
        let charsCount = word.length;
        let starsStr = `*`.repeat(charsCount);
        for (let eachWord of str) {
            if (eachWord === starsStr) {
                let index = str.indexOf(eachWord);
                str.splice(index, 1, word);
            }
        }
    }

    console.log(str.join(' '));
}
revealWord('great, learning',
    'softuni is ***** place for ******** new programming languages'
);