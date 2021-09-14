function solve(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
    /*
    let wordsObj = {};
    for (let word of words) {
        wordsObj[word] = 0; 
    }

    for (let word of array) {
        if(wordsObj.hasOwnProperty(word)) {
            wordObj[word]++;
        }
    }

    let keysArr = Object.keys(wordsObj).sort((a, b) => wordsObj[b] - wordsObj[a]);
    for (let key of keysArr) {
        console.log(`${key} - ${keysArr[key]}`);
    }
    */
}
solve([
    'this sentence',
    'In', 'this', 'sentence',
    'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task']);