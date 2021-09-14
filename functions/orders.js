function orders(order, priceforone) {
    let result = 0;
    if (order === `coffee`) {
        result = 1.5 * priceforone;
        console.log(result.toFixed(2));

    } else if (order === `water`) {
        result = 1 * priceforone;
        console.log(result.toFixed(2));

    } else if (order === `coke`) {
        result = 1.4*priceforone;
        console.log(result.toFixed(2));

    } else {
        result = 2*priceforone;
        console.log(result.toFixed(2));
    }
}
orders(`water`, 5);