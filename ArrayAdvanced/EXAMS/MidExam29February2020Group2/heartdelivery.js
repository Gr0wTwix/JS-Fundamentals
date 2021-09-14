function solve(array) {
    let houses = array.shift().split(`@`).map(Number);
    let commands = array.shift();

    let currentIndex = 0;

    while (commands !== `Love!`) {
        let tokens = commands.split(` `);
        let jumpLength = +tokens[1];

        currentIndex += jumpLength;
        
        if (currentIndex >= houses.length) {
            currentIndex = 0;
        }

        if (houses[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            houses[currentIndex] -= 2;
            if (houses[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }

        commands = array.shift();
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    let isSuccess = true;
    let count = 0;

    for (const house of houses) {
        if (house !== 0) {
            isSuccess = false;
            count++;
        }
    }

    if (isSuccess) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }
}

solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);