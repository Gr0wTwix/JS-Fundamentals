function solve(myString) {
    let myRegex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    while ((validName = myRegex.exec(myString)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");