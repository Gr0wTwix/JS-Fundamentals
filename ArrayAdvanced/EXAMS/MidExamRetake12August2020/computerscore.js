function scoreComputer(array) {
    let price = 0;
    let customer = ``;

    for (const line of array) {
        if (line == `special` || line == `regular`) {
            customer = line;
            break;
        }

        let currentPrice = Number(line);
        if (currentPrice <= 0) {
            console.log(`Invalid price!`);
            continue;
        }

        price += currentPrice;
    }
    if (price == 0) {
        console.log(`Invalid order!`);
    } else {
        let tax = price*0.2;
        let total = price+tax;
        if (customer == `special`) {
            total *= 0.9;
        }

        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${price.toFixed(2)}$
        Taxes: ${tax.toFixed(2)}$
        ----------- 
        Total price: ${total.toFixed(2)}$`)
    }


}
scoreComputer([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]    
    );