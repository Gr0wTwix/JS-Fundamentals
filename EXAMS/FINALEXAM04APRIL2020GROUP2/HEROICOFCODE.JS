function solve(myArray) {
    let myN = Number(myArray.shift());
    let myHeroObject = {};

    for (let i = 0; i < myN; i++) {
        let myHeroes = myArray.shift().split(` `);
        myHeroObject[myHeroes[0]] = myHeroObject[myHeroes[0]] || {};
        myHeroObject[myHeroes[0]].HP = Number(myHeroes[1]);
        myHeroObject[myHeroes[0]].MP = Number(myHeroes[2]);
    }

    for (let each of myArray) {
        let [command, nameOfhero, amountOf, spellOrAttacker] = each.split(` - `);

        amountOf = Number(amountOf);

        switch (command) {
            case "Heal":
                if (myHeroObject[nameOfhero].HP + amountOf >= 100) {
                    amountOf = 100 - myHeroObject[nameOfhero].HP;
                    myHeroObject[nameOfhero].HP = 100;
                    console.log(`${nameOfhero} healed for ${amountOf} HP!`);
                } else {
                    myHeroObject[nameOfhero].HP += amountOf;
                    console.log(`${nameOfhero} healed for ${amountOf} HP!`);
                }
                break;
            case "Recharge":
                if (myHeroObject[nameOfhero].MP + amountOf >= 200) {
                    amountOf = 200 - myHeroObject[nameOfhero].MP;
                    myHeroObject[nameOfhero].MP = 200;
                    console.log(`${nameOfhero} recharged for ${amountOf} MP!`);
                } else {
                    myHeroObject[nameOfhero].MP += amountOf;
                    console.log(`${nameOfhero} recharged for ${amountOf} MP!`);
                }
                break;
            case "TakeDamage":
                if (myHeroObject[nameOfhero].HP - amountOf > 0) {
                    myHeroObject[nameOfhero].HP = myHeroObject[nameOfhero].HP - amountOf;
                    console.log(`${nameOfhero} was hit for ${amountOf} HP by Orc and now has ${myHeroObject[nameOfhero].HP} HP left!`);
                } else {
                    console.log(`${nameOfhero} has been killed by ${spellOrAttacker}!`);
                    delete myHeroObject[nameOfhero];
                }
                break;
            case "CastSpell":
                if (myHeroObject[nameOfhero].MP - amountOf >= 0) {
                    myHeroObject[nameOfhero].MP -= amountOf;
                    console.log(`${nameOfhero} has successfully cast ${spellOrAttacker} and now has ${myHeroObject[nameOfhero].MP} MP!`);
                } else {
                    console.log(`${nameOfhero} does not have enough MP to cast ${spellOrAttacker}!`);
                }
                break;
        }
    }

    function sortByHP(a, b) {
        a = a[1].HP;
        b = b[1].HP;
      
        let comp = 0;
      
        if (b > a) {
          comp = 1;
        } else if (b < a) {
          comp = -1;
        }
      
        return comp;
      }

      function sortAlphabetically(a, b) {
        a = a[0];
        b = b[0];
    
        return a.localeCompare(b);
      }

      let array = Object.entries(myHeroObject).sort((a,b) => sortByHP(a,b) || sortAlphabetically(a,b));

      for (let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]}\r\n HP: ${array[i][1].HP}\r\n MP: ${array[i][1].MP}`);
      }
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log(`----------------------------------------------------------------`);
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);