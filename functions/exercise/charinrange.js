function charInRange(a,b) {
    let firstcode = a.charCodeAt();
    let secondcode = b.charCodeAt();
    let start = firstcode < secondcode ? firstcode : secondcode;
    let end = firstcode > secondcode ? firstcode : secondcode;
    let sum = ``;
    for (let i = start + 1; i < end; i++) {
        sum += String.fromCharCode(i) + ` `;
    }

    return sum;
    
}
console.log(charInRange(`#`,`:`));