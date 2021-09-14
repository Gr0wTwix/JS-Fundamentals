function student (name,num,average) {
num = Number(num);
average = Number(average);
console.log(`Name: ${name}, Age: ${num}, Grade: ${average.toFixed(2)}`);
}
student("John","15","5.54678");