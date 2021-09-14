function myInventory(arr) {

    let heroes = [];
    for (const line of arr) {
        let [hero, level, items] = line.split(` / `);
        items = items.split(`, `).sort((a,b) => a.localeCompare(b)).join(`, `);
        let myHereInfo = {
            Hero: hero,
            level: Number(level),
            items
        }

        heroes.push(myHereInfo);
    }

    heroes
    .sort( (a,b) => a.level - b.level )
    .forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });

}
myInventory(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);