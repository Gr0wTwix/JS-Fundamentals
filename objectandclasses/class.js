class Person {
    constructor(firstname,lastname,age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

let myPerson = new Person(`Peter`,`Johnson`,22);
console.log(myPerson);