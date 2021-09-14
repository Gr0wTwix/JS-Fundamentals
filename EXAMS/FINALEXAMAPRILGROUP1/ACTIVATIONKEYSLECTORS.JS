function solve(input) {
    let rawkey = input.shift();
    let line;
    // actions: 
    // Contains: check if substring is present inside string
    // Flip: extract substring from start to end index, performs operation and return to original place
    // Slice: extract substring from start to end index and remove

    let actions = {
        Contains(rawkey, pattern) {
            if (rawkey.indexOf(pattern) > -1) { // .includes()
                console.log(`${rawkey} contains ${pattern}`);
            } else {
                console.log(`Substring not found`);
            }
            return rawkey;
        },

        Flip(rawkey, mode, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawkey.substring(0, start);
            let second = rawkey.substring(start, end);
            let third = rawkey.substring(end);
            let result;
            if (mode === `Upper`) {
                result = first + second.toLocaleUpperCase() + third;
                console.log(result);
            } else {
                result = first + second.toLocaleLowerCase() + third;
                console.log(result);
            }
            return result;
        },

        Slice(rawkey, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawkey.substring(0, start);
            let second = rawkey.substring(end);
            let result = first + second;
            console.log(result);
            return result;
        }
    }

    // for each line
    // -- parse command
    // -- execute command

    while ((line = input.shift()) != `Generate`) {
        let [actionname, ...params] = line.split(`>>>`);
        rawkey = actions[actionname](rawkey,...params);
    }


    // print result
    console.log(`Your activation key is: ` + rawkey);
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);

