function solve (array) {
    let myText = array.shift();
    let wordsToPut = array.shift();

    for (let eachLetter of myText) {
        if (eachLetter === String.fromCharCode(92)) {
            let index = myText.indexOf(String.fromCharCode(92));
            myText = myText.substring(0, index) + myText.substring(index, myText.length);
        }
    }
    
    let newArr = myText.split(` `);
    for (let eachWord of newArr) {
        for (let word of wordsToPut) {
            if (eachWord.startsWith(`_`) && eachWord.length == word.length) {
                let myIndex = newArr.indexOf(eachWord);
                newArr.splice(myIndex, 1, word);
                break;
            }
        }
    }

    console.log(newArr.join(` `));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled.Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);