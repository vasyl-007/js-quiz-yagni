// =================== no name =====================
// var size = 3;
// for (let i = 1; i < size; i++) {
//   for (let k = 0; k < size - i; k++) {
//     console.log(k);
//   }
//   for (let k = 0; k < i; k++) {
//     console.log(k);
//   }
// }

// =================== no name =====================
// var students = ["John", "David"];
// console.log(students["1"].length); // 5
// console.log(students[1].length); // 5

// =================== no name =====================
// const num = Math.PI;
// console.log(num.toFixed(2))   // 3.14

// const num2 = (0.345 + 0.6458).toFixed(2)
// console.log(num2)   // 0.99

// =================== no name =====================
// const myArray = ["zero", 3, 4, "five", 1, 2, 6, "nine", 8];
// console.log(myArray["3"]);    // five

// =================== no name =====================
// var x = "Programming";
// var z =
//   x.substr(0, 6) +
//   x.charAt(6).toUpperCase() +
//   x.charAt(7).toUpperCase() +
//   x.substr(8);
// console.log(z);     // PrograMMing

// console.log(x.substr(0, 6));    // Progra
// console.log(x.slice(0, 6));     // Progra

// =================== no name !!! =====================
// function myFunc() {
//   console.log(x);
// }
// myFunc();     // undefined
// var x = 2;

// =================== no name !!! =====================
// var ls = [];
// function f(r) {
//   return r === 0 ? [] : [(ls[ls.length] = ls.length + 1), ...f(r - 1)];
// }
// console.log(f(5));      // [1,2,3,4,5]

// =================== no name =====================
// let a = typeof constructor == "object";     // false
// let b = typeof constructor == "function";   // true
// let c = typeof constructor == "undefined";  // false
// console.log(a, b, c);

// =================== no name ! =====================
// var a = 0.1;
// var b = 0.2;
// var c = 10;
// var d = (a + b) * c === a * c + b * c ? 1 : 0;

// console.log(d);
// console.log((0.1 + 0.2) * 10);      // 3.0000000000000004
// console.log(0.1 * 10 + 0.2 * 10);   // 3

// =================== no name =====================
// var i = 1;
// for (; i < 24; i += 3) {}
// console.log(i);     // 25

// =================== no name !!! =====================
// function foo(a) {
//   var b = 5;
//   function bar(a) {
//     return b + a;
//   }
//   return bar(b++);
// }
// console.log(foo(0));        // 11

// =================== no name !!! async =====================
// function wait(value, timespan) {
//   setTimeout(function () {
//     return value;
//   }, timespan);
// }
// var n = 8;
// n = wait(5, 1000);
// // console.log(n)
// setTimeout(function () {
//   console.log(n);
// }, 2000);           // undefined

// =================== no name =====================
// let a = "my";
// let b = `hello${a}world`;
// let c = "hello" + a + "world";
// console.log(b);         // hellomyworld
// console.log(c);         // hellomyworld
// console.log(b === c);   // true

// =================== no name IIFE !!!!!! mega =====================
// function abc(a) {
//   return (
//     (function (y) {
//       return y + 1;
//     })(++a) + a
//   );
// }
// console.log(abc(2));        // 7

// =================== no name =====================
// var a, b;
// var c = 3,
//   d = 4;
// a = d;
// b = c;
// ++d;
// console.log(a * d + c);     // 23

// =================== no name !!! =====================
// var x = 7;
// var y = 8;
// var z = 9;
// x = y = z;
// console.log(x, y, z); // 9 9 9

// x = y = 5;
// console.log(x, y, z); // 5 5 9

// =================== no name =====================
// var x = 2;
// var y = x != 5;
// if (x != 2) {
//   console.log(y);
// } else if (y && typeof x == "number") {
//   console.log(1 + 1);                       // 2
// } else {
//   console.log(10 - x);
// }

// =================== no name =====================
// var x = 1;
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j >= 2; j++) {
//     for (var k = 0; k > 5; k++) {
//       x++;
//     }
//   }
// }
// console.log(x);     // 1

// =================== no name =====================
// var x = 1;
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     for (var k = 0; k <10; k++) {
//       x++;
//     }
//   }
// }
// console.log(x);     // 1001

// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
