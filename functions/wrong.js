function solve(n1, n2, n3) {

    let result = ``;
    if (n1 >= 0 && n2 >= 0 && n3 >= 0) {
        result = `Positive`;
    } else if (n1 < 0 && n2 >= 0 && n3 >= 0) {
        result = `Negative`;
    } else if (n1 >= 0 && n2 < 0 && n3 >= 0) {
        result = `Negative`;
    } else if (n1 >= 0 && n2 >= 0 && n3 < 0) {
        result = `Negative`;
    } else if (n1 < 0 && n2 < 0 && n3 >= 0) {
        result = `Positive`;
    } else if (n1 >= 0 && n2 < 0 && n3 < 0) {
        result = `Positive`;
    } else if (n1 < 0 && n2 >= 0 && n3 < 0) {
        result = `Positive`;
    } else if (n1 = 0) {
        result = `Positive`;
    } else if (n2 = 0) {
        result = `Positive`;
    } else if (n3 = 0) {
        result = `Positive`;
    } else {
        result = `Negative`;
    }
    console.log(result)
}
solve(-1, 0, 1);