function solve(grade) {

    if (grade < 3.00) {
        console.log(`Fail`);
    } else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor`);
    }  else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good`);
    }  else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good`);
    }  else  {
        console.log(`Excellent`);
    }
}
solve(3.33);