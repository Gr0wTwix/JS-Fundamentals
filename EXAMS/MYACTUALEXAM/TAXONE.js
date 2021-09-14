function solve(myArray) {
    let myString = myArray.shift();

    for (let each of myArray) {
        let [command, stringOrindex, countOrreplacement] = each.split(` `);

        switch (command) {
            case "Translate":
                let i = myString.indexOf(stringOrindex);
                while (i != -1) {
                    myString = myString.substring(0, i) + countOrreplacement + myString.substring(i + stringOrindex.length);
                    i = myString.indexOf(stringOrindex);
                }
                console.log(myString);
                break;
            case "Includes":
                if (myString.includes(stringOrindex)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            case "Start":
                if (myString.startsWith(stringOrindex)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            case "Lowercase":
                myString = myString.toLowerCase();
                console.log(myString);
                break;
            case "FindIndex":
                let myLast = myString.lastIndexOf(stringOrindex);
                console.log(myLast);
                break;
            case "Remove":
                stringOrIndex = Number(stringOrindex);
                countOrreplacement = Number(countOrreplacement);
                myString = myString.split("");
                myString.splice(stringOrindex, countOrreplacement);
                myString = myString.join("");
                console.log(myString);
                break;
        }
    }

}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]);