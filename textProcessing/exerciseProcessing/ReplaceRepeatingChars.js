function solve(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i+1]) {
            word = word.substring(0, i) + word.substring(i + 1);
            i--;
        }
    }

    console.log(word);
}
solve('qqqwerqwecccwd');