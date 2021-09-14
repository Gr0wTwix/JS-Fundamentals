/*
function MyPush(arr,element) {
    arr[arr.length] = element;

}

function myPop(arr) {
    let element = arr[length - 1];

    arr.length--;

    return element;
}

let myArr = [`20`,`30`,`40`];
console.log(myArr);


MyPush(myArr,`50`);
console.log(myArr);



function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}


console.log(myIndexOf(myArr,`30`));
*/

let myArr = [7, -2, 8, 9, 11, -3, 14];
console.log(myArr);
let slicedArr = myArr.slice(2,5);
console.log(`Sliced`, slicedArr);