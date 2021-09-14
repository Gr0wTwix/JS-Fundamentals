function solve(array) {
    let myListNames = array.shift();
    let name = ``;
    let distance = 0;
    let associativeArray = {};

    for (let eachName of array) {
        if (eachName === `end of race`) {
            break;
        }

        let newArr = eachName.match(/\w+/g);  

        for (let everyChar of newArr) {
            for (let char of everyChar) {
                if (char.match(/[a-zA-Z]/)) {
                    name += char;
                } else {
                    distance += Number(char);
                }
            }
        }

        if (myListNames.includes(name)) {
            if (associativeArray.hasOwnProperty(name)) {
                associativeArray[name] += distance;
            } else {
                associativeArray[name] = distance;
            }
        }
        name = ``;
        distance = 0;
    }

    let newArr = [];
    for (let partName in associativeArray) {
        newArr.push([partName, associativeArray[partName]]);
    }

    newArr.sort((a,b)=>b[1]-a[1]);
    console.log(`1st place: ${newArr[0][0]}`);
    console.log(`2nd place: ${newArr[1][0]}`);
    console.log(`3rd place: ${newArr[2][0]}`);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);