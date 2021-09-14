function solve (word,sentence) {
    sentence = sentence.toLowerCase();
    sentence = sentence.split(` `);
    let isTrue = false;
    for (let eachWord of sentence) {
        if (eachWord === word) {
            console.log(word);
            isTrue = true;
            break;
        } 
    }

    if (!isTrue) {
        console.log(`${word} not found!`);
    }
}
solve('berb',
'jAVaScRipt is the best programming languageberb'
);