function solve(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(` `);
        let cat = new Cat(tokens[0], tokens[1]);
        cat.meow();
    }


}
solve([`Mellow 2`, `Tom 5`]);



/*  
 for (let catAsString of array) {
    let [catname, catAge] = catAsString.split(` `);
    console.log(`${catname})
}

*/