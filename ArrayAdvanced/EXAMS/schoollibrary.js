function solve(array) {
    let booknames = array.shift().split(`&`);

    for (let i = 0; i < booknames.length; i++) {
        booknames[i] = booknames[i].trim();
    }

    for (let commands of array) {

        if (commands === `Done`) {
            console.log(booknames.join(`, `));
            break;
        }

        let [command, book, book2] = commands.split(` | `);

        switch (command) {
            case "Add Book":
                if (booknames.includes(book)) {
                    break;
                }
                booknames.unshift(book);
                break;
            case "Take Book":
                if (booknames.includes(book)) {
                    let index = booknames.indexOf(book);
                    booknames.splice(index, 1);
                    break;
                }
                break;
            case "Insert Book":
                booknames.push(book);
                break;
            case "Check Book":
                if (booknames[Number(book)] === undefined) {
                    break;
                } else {
                    console.log(booknames[Number(book)]);
                    break;
                }
            case "Swap Books":
                if (booknames.includes(book) && booknames.includes(book2)) {
                    let firstIndex = booknames.indexOf(book);
                    let secondIndex = booknames.indexOf(book2);
                    booknames[firstIndex] = book2;
                    booknames[secondIndex] = book;
                }
                break;
        }

    }
}
solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done'
  ]
);