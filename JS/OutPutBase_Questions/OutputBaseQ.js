QUESTION:-1   //What will be the output of the code below?
// x = 5;
// var x;
// (function fun() { 
//     {
//         let x = 1;
//         x++;
//         console.log(x);
//     }
//     console.log(x);
// })();
// output 2 5 


QUESTION:-2 // What will be the output of the code below and why?
// setTimeout(() => {
//     console.log("Hi");
// }, 0)
// console.log("Hello");
// output Hello Hi

// var x = 5;
// x = 0;
// setTimeout(() => {
//     console.log(x);
// })
// console.log("Hello");
// x = x+1;
// output Hello 1

QUESTION:-3 //What will be the output of the code below and why?
// fun2();
// console.log(x);
// console.log(y);
// fun1();
// const fun1 = () => {
//     console.log("fun1")
// }
// function fun2(){
//     console.log("fun2")
// }
// var x = 5;
// let y = 7;
 // output => fun2 undefined 
//ReferenceError: //Cannot access 'y' before initialisation
//ReferenceError: //Cannot access 'fun1' before initialisation

QUESTION:-4 // What will be the output of the following code?
// var Output = (function(X)
// {
// delete X;
// return X;
// }
// )(0);
// console.log(Output);
// output => 0

 QUESTION:-5 //What will be the output of the following code?
// var X = { Foo : 1}; 
// var Output = (function() 
// { 
// delete X.foo; 
// return X.foo; 
// } 
// )(); 
// console.log(Output);
// output => undefined

QUESTION:-6 //the output of the given JavaScript code?
// let x = 10;
// const y = x++ + ++x - ++x;
// console.log(x++, ++x, --x, y); // 9
//x++ = 13 , ++x = 15 , ++x = 14 => 13+15-14 => 9

QUESTION:-6 // the output of the given JavaScript code?
// function* greetGenerator() {
//     yield 'Hi';
//     yield 'Hello';
//   }
//   const greet = greetGenerator();
//   console.log(greet.next().value); // Hi 
//   console.log(greet.next().value); // Hello
//   console.log(greet.next().value); // undefine

QUESTION:-7 //the output of the given JavaScript code?
// function greet(message) {
//     return new Promise((resolve, reject) => {
//         if (message === 'Hi') resolve(message);
//         else reject('Hmm');
//     })
//   }
//    const result = greet('Hello').then((data) => {
//     console.log(data)
//   }).catch((data) => {
//     console.log(data);
//   }) //Hmm

  QUESTION:-8 //the output of the given JavaScript code?
//   const arr = [...'codedamn'];

// console.log(arr); //[‘ c’, ‘o’, ‘d’, ‘e’, ‘d’, ‘a’, ‘m’, ‘n’]

QUESTION:-9 //Write a function that removes duplicates from an array without using Set.
// function removeDuplicates(arr) {
//     return arr.filter((x, i) => arr.indexOf(x) === i);
//   }
// console.log(removeDuplicates([1,2,3,1,4])) // [ 1, 2, 3, 4 ]

   QUESTION:-10 // output 

var a = 1;

var func = function(){
    console.log(a)
    var a = 2 
};

func() 

