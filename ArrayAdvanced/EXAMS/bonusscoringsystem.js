function solve (array) {
    array = array.map(Number)
    let nothing = array.shift();
    let lecturesNumber = array.shift();
    let bonusInitial = array.shift();

    let attendancesMax = array.reduce((a, b) => {
        return Math.max(a, b);
    });

    let maximumScore = attendancesMax/lecturesNumber*(5+bonusInitial);
    
    console.log(`Max Bonus: ${Math.ceil(maximumScore)}.`);
    console.log(`The student has attended ${attendancesMax} lectures.`);   

}
solve(['5',  '25', '30','12', '19', '24','16', '20']);