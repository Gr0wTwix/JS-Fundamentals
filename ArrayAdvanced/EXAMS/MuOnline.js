function MuOnline(array) {
    let newArr = array.split(`|`);
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < newArr.length;i++) {

        let [command,number] = newArr[i].split(` `);

        number = Number(number);

        if (command === `potion`) {
            let previousHealth = health;
            health += number;
            if (health > 100) {
                previousHealth = 100 - previousHealth;
                health = 100;
                console.log(`You healed for ${previousHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command === `chest`) {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}
MuOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');