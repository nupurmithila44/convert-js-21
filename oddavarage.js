// function oddaverage(numbers){
// console.log(numbers);
// }
// const num = [ 42, 13, 58, 65, 81];
// const avg = oddaverage(num);
// console.log('avaragee number', avg);


function oddaverage(numbers){
    let evenNumbers = [];
    for(const number of numbers){
        if(number % 2 === 0){
          evenNumbers.push(number);
        }
    }
    let sum = 0;
    for(const number of evenNumbers){
         sum = sum + number;
    }
    // console.log(sum);
    const count = evenNumbers.length;
    console.log(sum, count);
    const avg = sum /count;
    return avg;

}
const num = [ 21, 33, 55, 54, 34, 23, 54];
const avg = oddaverage(num);
console.log ('avarage of the odd numbers is:', avg);
