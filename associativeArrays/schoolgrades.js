function solve(array) {
    // declare collection to store result
    let students = new Map();
    // repeat for each request
    for (let line of array) {
        // - parse input
        let tokens = line.split(` `);
        // -- extract name 
        let name = tokens.shift();
        // -- parse grades as number
        let grades = tokens.map(Number);
        // -- store data 
        if (!students.has(name)) {
            students.set(name, []);
        }

        let existing = students.get(name);

        for (let each of grades) {
            existing.push(each);
        }
    }

    // sort data
    // - convert to array 
    let sorted = Array.from(students);
    // - apply compare function, calculating average score
    sorted.sort(average);
    // print result 
    for (let [name,grades] of sorted) {
        console.log(`${name}: ${grades.join(`, `)}`);
    }

    function average([nameA, gradesA], [nameB, gradesB]) {
        // calculate average for student A
        let avrA = 0;
        gradesA.forEach(x => avrA += x);
        avrA /= gradesA.length;

        let avrB = 0;
        gradesB.forEach(x => avrB += x);
        avrB /= gradesB.length;

        return avrA - avrB;
    }

}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);