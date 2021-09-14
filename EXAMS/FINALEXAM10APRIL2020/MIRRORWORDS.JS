function solve(array) {
    let myString = array.shift();
    let myPattern = /([@|\#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let myValidWords = [];
    let myWords = myString.match(myPattern);

    if (myWords !== null) {
        for (let each of myWords) {

            let newArr = each.match(/[a-z]+/gi);
            let checkWord = "";

            for (let i = newArr[0].length - 1; i >= 0; i--) {
                checkWord += newArr[0][i];
            }

            if (newArr[1] === checkWord) {
                myValidWords.push(newArr[0]);
                myValidWords.push(newArr[1]);
            }
        }

        let line = ``;
        if (myWords.length > 0) {
            console.log(`${myWords.length} word pairs found!`);
        } else {
            console.log(`No word pairs found!`);
        }

        if (myValidWords.length > 0) {
            while (myValidWords.length > 0) {
                let myFirstWord = myValidWords.shift();
                let mySecondWord = myValidWords.shift();
                line += myFirstWord + " <=> " + mySecondWord + ", ";
            }
            let consoleMyLine = line.slice(0, -2);
            console.log(`The mirror words are:`);
            console.log(consoleMyLine);
        } else {
            console.log(`No mirror words!`);
        }
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);