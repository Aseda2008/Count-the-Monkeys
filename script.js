//!2.03.2025
//?1 function findAverage(array) {
//     if(array.length === 0){
//         return 0
//     }
//     let arr = array.reduce((acc,el) => acc + el )
//     return arr / array.length
// }   
//   console.log( findAverage([1,2,3,4]));
//?2 function twoSort(s) {
// 	return  s.sort()[0].split("").join("***")
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
// function divisibleBy(numbers, divisor){
  


    
// }
// console.log(divisibleBy([1,2,3,4,5,6], 2));
//!8.03.2025
//?1 function maps(x){
// return x.map((el) => el + el)
// } //!жана массив
// console.log(maps([1, 2, 3]));
//?2
// var websites = ["codewars"] //!массивди озгорттуу
// console.log(websites);

//? 3 function divisibleBy(numbers, divisor){
// return numbers.filter((el) => el % divisor === 0)
//!filter методунда true же false кайтаруу керек. Бул ката болуп саналат.
// }
// ! return numbers.filter((el) => {
// !     if(el % divisor === 0){
// !         return el;
// !     }
// ! })
 //!ката
// console.log(divisibleBy([1,2,3,4,5,6], 2));

// function distinct(a) {
//     let arr1 = []
// return  a.reduce((acc,el) =>  {
//     if(acc === el){
//      return arr1.push(acc)   
//     }
//     else{
//         return false
//     }
// },0)

// }
//? 4:1 function distinct(a) {
// return a.reduce((acc,el) => {
//     if(!acc.includes(el)){
//   acc.push(el)
//     }
//     return acc
// },[])
// }
//?4:2 function distinct(a){
// return [...new Set(a)]
// }
// console.log(distinct([1, 2, 1, 1, 3, 2]));
// !  Set — 
// //? уникалдуу элементтерди сактайт.
//! new Set() —
//?  бул конструкция a массивин Setке айландырат. Массив a Setке айландырылганда,
//?  кайталанган элементтер автоматтык түрдө алып салынат, анткени Set ичиндеги элементтер 
//?  уникалдуу болушу керек.

//?5 function mergeArrays(arr1, arr2) {
// return [...new Set(arr1.concat(arr2).sort((a,b) => a - b ))]
// }
// console.log(mergeArrays([1,3,5,7,7,9,11,12], [1,2,3,4,5,10,12]));// [1,2,3,4,5,7,9,10,11,12]
// function countBy(x, n) {
 
//   }
//   console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]
//?1 function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
// console.log(sumOfDifferences([2, 1, 10]));
//!2025:03:15 
//?1 function check(a, x) {
//   return a.some((el) => {
//   return el === x
//   })
// }
// console.log(check(['t', 'e', 's', 't'], 'e'));
// ?2function swapValues(arr) {
//   return arr.reverse()
  
// }
// console.log(swapValues([1,2]));
//?3 function well(x){
//  let count = x.filter(el => el == 'good').length
//  console.log(count)
//  return count >= 3 ?'I smell a series!'  ? count === 2 :'Publish!' :'Fail!'
// }
        //  console.log(well(['bad', 'bad', 'bad']), 'Fail!');
        //  console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
        //  console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'  );
      // ?4  function countBy(x, n) {
      // let z = []
      // for(let i = 1;i <= n;i++){
      // z.push( x * i)
      // }
      // return z
      // }
      // console.log(countBy(1,10));
      // ?5 function fixTheMeerkat(arr) {
      //   return arr.reverse()
      //  }
      //  console.log(fixTheMeerkat(["tails", "body", "heads"]));
      // function countPositivesSumNegatives(input) {
      //   return input && input.length ? [input.filter(el => el > 0).length,input.filter((el) => el < 0).reduce((a, b) => a + b)] : []
      // }
      // console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));//10,-65
 //!2025.03.20
//?1  function findMultiples(integer, limit) {
//   let res = []
//   for(let i = integer;i<= limit;i += integer){
//     res.push(i)
//   }
// return res
// }
// console.log(findMultiples(5, 25));//[5, 10, 15, 20, 25]
//?2 function removeEveryOther(arr){
//   let newarr = []
// arr.map((el,idx) => {
// if(idx % 2 === 0){
// newarr.push(el)
// }
// })
// return newarr
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

//?3 function arrayPlusArray(arr1, arr2) {
// let res = arr1.concat(arr2)
// return res.reduce((acc,el) => acc + el,0)
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
//?4 function fakeBin(x){
// return x.split("").map((el) => el < 5 ? 0 : 1 ).join("")
// }
// console.log(fakeBin('45385593107843568'));

//!2025.03.21
// ?1function calculator(a,b,sign){
//   return sign !== "+" && sign !== "*" && sign !== "-" && sign !== "/" ? "unknown value" : typeof a !== "number" ? "unknown value": typeof b !== "number" ?"unknown value": sign === "+" ? a + b : sign === "-" ? a - b : sign === "*" ? a * b : sign === "/" ? a / b : null
// }
// console.log(calculator("8",   "0", "-", ));
//?2 function stringToArray(string){
// return string.split(" ")
// }
// console.log(stringToArray("Robin Singh"));
// ?3function smash (words) {
//   return words.join(" ")
// };
// console.log(smash(["hello", "world"]));
// function firstNonConsecutive (arr) {
// if(arr.length < 2)  return null;
// for(let i = 0;i < arr.length - 1;i++){   //!0 < 7 
// if(arr[i + 1] !== arr[i] + 1){ //!2 !== 2 true 3 !== 3 true 4 !== 4 true 
//     return arr[i + 1]
//   }
let a = []
let s = ""
  
//   }
//   return null
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
//!2025.03.23
//?1 function addLength(str) {
// return str.split(" ").map((el) => {
//   return el + " " + el.length
// })
//   }
  // console.log(addLength("apple ban"));
  

