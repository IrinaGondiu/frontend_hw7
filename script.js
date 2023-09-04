//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function numbers (a,b){
  // if(a<b){
    // console.log(a);
  // }else{
    // console.log(b);
  // }
// }
// 
// numbers(4,7)

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function numEven (a,b){
// let start = Math.max(a, b);
// let end = Math.min(a, b);
// 
  // for (let i = start; i >= end; i--) {
    // if (i % 2 === 0) {
      // console.log(i);
    // }
  // }
// }
// 
// 
// numEven(10, 24);
// 

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.


// function power(num,square){
  // 
  // return num**square
// }
// 
// console.log(power(4,2));
// 

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumOfAllNumbers(n) {
  // let sum = 0;
// 
  // for (let i = 1; i <= n; i++) {
    // sum += i;
  // }
// 
  // return sum;
// }
// 
// 
// const n = 10;
// const result = sumOfAllNumbers(n);
// console.log(`Сумма чисел от 1 до ${n} равна ${result}`);

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sumOfElem(n,m){
  // let sumEven = 0
  // let sumOdd = 0
  // for(let i = n; i<= m; i++){
    // if(i%2===0){
      // sumEven += i
    // }else{
      // sumOdd += i
  // }
//  
// }
// console.log(`The sum of even numbers is: ${sumEven}`);
// console.log(`The sum of odd numbers is: ${sumOdd}`);
// }
// sumOfElem(8,25)

//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
// function findLongestElement(arr) {
// if (arr.length === 0) {
  // return null;
// }
// 
// let longest = arr[0];
// 
// for (let i = 0; i < arr.length; i++) {
  // if (arr[i].length > longest.length) {
    // longest = arr[i];
  // }
// }
// 
// return longest;
// }
// 
// const inputArray = ['one', 'two', 'three'];
// const longestElement = findLongestElement(inputArray);
// console.log(longestElement);