function solve(str, ch, str2) {
    let word = str.replace(`_`, ch);
    if (word === str2) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
solve(`Str_ng`, `i`, `Strong`);