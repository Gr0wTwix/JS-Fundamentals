function solve(fileName) {

    while (fileName.includes(`\\`)) {
        let index = fileName.indexOf(`\\`);
        fileName = fileName.substring(index + 1);
    }

    if (fileName.split(`.`).length > 2) {
        fileName = fileName.split(`.`);
        let extension = fileName.pop();
        console.log(`File name: ${fileName.join(`.`)} \r\nFile extension: ${extension}`);
    } else {
        let myNewFile = fileName.split(`.`);
        console.log(`File name: ${myNewFile[0]} \r\nFile extension: ${myNewFile[1]}`);
    }

    // !!! 2ро Решение на Задачата: 
    
    // let i = fileName.lastIndexOf(".");
    // let extension = fileName.substring(i + 1);
    // let name = fileName.slice(fileName.lastIndexOf("\\") + 1, i);
    // console.log(`File name: ${name} \r\nFile extension: ${extension}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.rx.bitch.cs')