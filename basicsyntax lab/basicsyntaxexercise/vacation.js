function vacation(group, type, day) {
    group = Number(group);
    let totalprice = 0;
    switch (type) {
        case `Students`:
            if (day == "Friday") {
                totalprice = group * 8.45;
                if (group >= 30) {
                    totalprice = 0.85 * totalprice
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            } else if (day == "Saturday") {
                totalprice = group * 9.80;
                if (group >= 30) {
                    totalprice = 0.85 * totalprice
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            } else {
                totalprice = group * 10.46
                if (group >= 30) {
                    totalprice = 0.85 * totalprice
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            }
        case `Business`:
            if (day == "Friday") {
                if (group >= 100) {
                    totalprice = (group - 10) * 10.90
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            } else if (day == "Saturday") {
                if (group >= 100) {
                    totalprice = (group - 10) * 15
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            } else {
                if (group >= 100) {
                    totalprice = (group - 10) * 16
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            }
        case `Regular`:
            if (day == "Friday") {
                totalprice = group * 15;
                if (group >= 10 && group <= 20) {
                    totalprice = totalprice * 0.95;
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            } else if (day == "Saturday") {
                totalprice = group * 20;
                if (group >= 10 && group <= 20) {
                    totalprice = totalprice * 0.95;
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }

            } else {
                totalprice = group * 22.50
                if (group >= 10 && group <= 20) {
                    totalprice = totalprice * 0.95;
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                } else {
                    console.log(`Total price: ${totalprice.toFixed(2)}`);
                    break;
                }
            }
    }
}
vacation(`40`, `Regular`, `Saturday`);