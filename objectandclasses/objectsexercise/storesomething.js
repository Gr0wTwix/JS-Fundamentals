function solve(arr1, arr2) {
    let shop = {};

    for (let i = 0; i < arr1.length; i += 2) {
        const element = arr1[i];
        shop[element] = Number(arr1[i+1]);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        const element = arr2[i];
        if (!shop.hasOwnProperty(element)) {
            shop[element] = Number(arr2[i+1]);
        } else {
            shop[element] += Number(arr2[i+1]);

        }
    
    }


    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    })
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);