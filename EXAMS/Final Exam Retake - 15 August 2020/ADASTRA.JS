function solve(myArray) {
    let sumNutrition = 0;
    let myTextString = myArray.shift();
    let myPattern = /([#\|])[A-Za-z? ]+\1\d{2}\/\d{2}\/\d{2}\1\d+\1/g;
    let myValidFoods = myTextString.match(myPattern);
    let myOtherArray = [];

    if (myValidFoods !== null) {
        for (let eachFood of myValidFoods) {
            let myFood = eachFood.split(/[#\|]/);
            myFood.shift()
            myFood.pop();
            myOtherArray.push(myFood);
            sumNutrition += Number(myFood[2]);
        }
    
        let daysCounter = 0;
        while (sumNutrition >= 2000) {
            sumNutrition -= 2000;
            daysCounter++;
        }
    
        console.log(`You have food to last you for: ${daysCounter} days!`);
        for (let eachArr of myOtherArray) {
            console.log(`Item: ${eachArr[0]}, Best before: ${eachArr[1]}, Nutrition: ${eachArr[2]}`);
        }
    } else {
        console.log(`You have food to last you for: 0 days!`);
    }
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );
solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]]);
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);