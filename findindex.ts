const numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
const newNumbers: number[] = [];
let i = 0
while (i <=10) {
    if(numbers.indexOf(i)==-1){
    newNumbers.push(i)
    }
    i++;
}
console.log(newNumbers)



