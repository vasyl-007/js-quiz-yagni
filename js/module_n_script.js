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
// let num = new Map();
// num.set("one", "1").set("two", "2");
// console.log(num.delete("two"));     // true
// console.log(num.has("two"));        // false

// =================== no name =====================
// let { log } = console;
// log("10");              // 10;

// =================== no name =====================
// let a, b;
// ({ a, b } = { a: 1, b: "2" });
// console.log(1 + a + b);         // 22;

// =================== no name !!! =====================
// const a = {};
// console.log(String(a));     // [object Object]

// =================== no name =====================
// const obj = {
//   name: "Bob",
// };

// Object.defineProperty(obj, "profession", {
//   enumerable: false,
//   writable: false,
//   value: "QA",
// });

// obj.age = 40;
// // obj.profession = "engineer";

// console.log(obj); // TypeError: Cannot assign to read only property 'profession' of object '#<Object>'

// =================== no name =====================
// const obj = {
//   name: "Bob",
// };

// Object.defineProperty(obj, "profession", {
//   enumerable: false,
//   writable: false,
//   value: "QA",
// });

// obj.age = 40;

// console.log(obj); // {name: "Bob", age: 40, profession: "QA"}

// =================== no name !!! =====================
// const func = () => "here";

// const a = !!"    ";
// const b = 1 && 2 && 3;
// const c = "" && false && NaN;
// const d = false || 2 || 3;
// const e = 1 && func && func();

// console.log(a, b, c, d, e);     // true 3 "" 2 "here"

// =================== no name !!!!!! =====================
// class Worker {
//   constructor(home, name) {
//     this.home = home;        // на экземпляр идет
//     this.name = name;        // на экземпляр идет
//   }

//   goHome() {
//     this.wentHome = true;   // на прототип
//   }
// }

// // const worker1 = new Worker("Kyiv", "Petr");
// Worker.home = "Kyiv";
// // console.log(Worker)
// Worker.getStatus = function () {
//   console.log(Worker.home);         // Kyiv
//   console.log(this.name);           // Worker
// };

// const worker = new Worker("street", "Bob");
// Worker.getStatus();

// =================== no name !!!! reduce =====================

// const animals = ["pig", "cow", "dog", "cat"];

// const something = animals.reduce((acc, animal) => {
//   acc[animal] = true;
//   return acc;
// }, {});

// console.log(something);     // {pig: true, cow: true, dog: true, cat: true}

// =================== no name !!!! push , pop =====================
// const animals = ["pig", "cow", "dog", "cat"];

// console.log(animals.push("horse")); // 5  - push returns a lenght of the array
// console.log(animals.pop()); // "horse"  - pop returns the deleted element
// console.log(animals.slice(0, 2)); //  ["pig", "cow"] - slice returns copied elements from array
// console.log(animals);   // ["pig", "cow", "dog", "cat"]

// console.log(animals.splice(0, 2)); //  ["pig", "cow"] - splice returns copied elements from array && changes the array
// console.log(animals);   // ["dog", "cat"]

// =================== no name =====================
// const animals = ["pig", "cow", "dog", "cat"];

// console.log(animals.push("horse")); // 5  - push returns a lenght of the array
// console.log(animals.unshift("duck")); // 6  - unshift returns a lenght of the array

// console.log(animals.pop()); // horse
// console.log(animals.shift()); // duck

// =================== no name =====================

// console.log(!!1 === Boolean(1));  // true
// =================== no name =====================
// var a = function (x) {
//   if (x > 0) {
//     return true;
//   } else return false;
// };

// var b = function (y) {
//   if (y) return "ok";
//   else return "no";
// };

// console.log(b(a(-3)));      // no

// =================== no name !!! =====================
// var arr = new Array("");
// for (var i = 0; i < 10; i++) {
//   arr[i] = new Array("");
//   for (var j = 0; j < 10; j++) {
//     arr[i][j] = i + j;
//   }
// }
// console.log(arr);   // сложный массив, в котором еще 10 подмассивов

// 0: (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2: (10) [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// 3: (10) [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// 4: (10) [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 5: (10) [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// 6: (10) [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// 7: (10) [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// 8: (10) [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
// 9: (10) [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

// =================== no name !!!! =====================
// var arr = new Array("");
// for (var i = 0; i < 10; i++) {
//   arr[i] = new Array("");
//   for (var j = 0; j < 10; j++) {
//     arr[i][j] = i * j;
//   }
// }
// console.log(arr[4][8]);     // 32

// =================== no name =====================
// console.log(false === (false && false));   // true

// =================== no name !!! =====================
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false

// const arr = [1, 2, 3, NaN, 4];
// console.log(arr.includes(NaN));     // true     paradox
// console.log(arr.indexOf(NaN));     // -1
// console.log(arr.length);     // 5

// =================== no name !!! =====================
// var x = NaN;
// if (NaN) {
//   console.log(x);
// } else {
//   console.log(!x);    // true
// }

// =================== no name !!! =====================
// var i = 2;
// var k = 1;
// var j = 0;
// for (k = 0; k < 10; k++) j++;
// for (i = 0; i < 10; i++) continue;
// j++;
// console.log(j);     // 11

// =================== no name =====================
// const arrOne = [1, 2, 3, 4, 5];
// const arrTwo = new Array();
// // const arrTwo = [];       // the same

// for (let i = 0; i < arrOne.length; i++) {
//   arrTwo[i] = arrOne[i] * 2;
// }

// console.log(arrTwo);

// =================== no name =====================
// [4].filter(function (x) {
//   console.log(x > 3);
// })[0];      // true

// =================== no name =====================
// console.log(!!0 === Boolean(0));    // true
// console.log(!!1 === Boolean(1));    // true
// console.log(!!Boolean);    // true
// console.log(!!!Boolean);    // false
// console.log(typeof !!!Boolean);    // boolean
// console.log(typeof !!Boolean);    // boolean

//  !!1 - this is Boolean of 1
//  !!10 - this is Boolean of 10
//  !!0 - this is Boolean of 0

// console.log(typeof !!1);      // boolean
// console.log(typeof !!0);      // boolean
// console.log(typeof !!1 === !!0);    // false

// =================== no name !!!! =====================
// var size = 4;
// for (let i = 1; i < size; i++) {
//   for (let k = 0; k < size - 1; k++) {
//     console.log(2);
//   }
//   for (let k = 0; k < 1; k++) {
//     console.log(1);
//   }
//   console.log("<br>");
// }

// =================== no name =====================
// var arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
// var index = arr.indexOf(9);
// var result = index < 0 ? 1 : 0;
// console.log(result);    // 1

// =================== no name =====================
// var a = null;
// var b = 5;
// var c = a + b;
// console.log(c);     // 5

// =================== no name =====================
// class enemy {
//   constructor(height, strength) {
//     this.height = height;
//     this.strength = strength;
//   }
// }

// let chris = new enemy(100, 50);
// let { prop1, prop2 } = chris;
// console.log(prop1 + prop2);     // NaN

// =================== no name =====================
// class Person {
//   constructor() {
//     this.name = "John";
//   }
//   static get Name() {
//     console.log(this.name);
//   }
//   showName() {
//     return this.name;
//   }
// }
// let userName = new Person();
// console.log(userName.showName());   // John

// =================== no name !!! =====================
// let a = "100 20";
// let b = Array.from(a).length;
// console.log(b);         // 6

// let c = Array.from(a);
// console.log(c);         // ["1", "0", "0", " ", "2", "0"]

// =================== no name !!! IIFE inside IIFE ==================
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(0);
// })("x");    // x

// =================== no name ! =====================
// var x = 5;
// var y = 1;
// do {
//   x++;
//   y++;
// } while (x < 9);
// console.log(y);     // 5

// =================== no name !!! =====================
// var str = "Solo!!learn!";
// str = str.split("!");

// // console.log(str);   // ["Solo", "", "learn", ""]

// let output = (...str) => {
//   console.log(str[2] + str.length);     // learn4
// };
// output(...str);

// =================== no name !!! =====================
// var str = "Solo!!learn!";
// str = str.split("!");

// let output = (str) => {
//   console.log(str[2] + str.length);     // learn4
// };
// output(str);

// =================== no name =====================
// let min = Math.min(...[5, 8]);
// let max = Math.max(...[1, 4, 2]);

// console.log(min + max);     // 9

// =================== no name =====================
// const value = 0;
// if (value) {
//   console.log(true);
// } else {
//   console.log(false);   // false
// }

// =================== no name =====================
// const value = 0;
// if (value) {
//   return true;
// } else {
//   return false; // SyntaxError: Illegal return statement
// }
// нельзя использовать return в конструкциях if

// =================== no name !!! =====================
// var i = 0;
// var j = 0;
// var count = 0;
// for (; i < 3; i++) {
//   for (; j < 3; j++) {
//     count++;
//   }
// }
// console.log(count);     // 3

// =================== no name =====================
// var count = 0;
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     count++;
//   }
// }
// console.log(count);     // 9

// =================== no name !!! =====================
// function addBinary(a, b) {
//   var sum = a + b;
//   var res = "";
//   while (sum > 0) {
//     res = (sum % 2) + res;          // преобразовуется в строку
//     sum = Math.floor(sum / 2);
//   }
//   return res;
// }
// console.log(addBinary(1, 2));   // 11

// =================== no name =====================
// const arr = [1, 4, 10, 20, 3];
// const max1 = console.log(Math.max(...arr));
// const max2 = console.log(Math.max.apply(null, arr));

// =================== no name !! =====================
// for (let i = 0; i < 5; i++) {
//   i += i;
//   console.log(i);   // 0 4
//   i++;
// }

// =================== no name =====================
// var arr = [];
// arr[1] = 5;
// arr[0] = arr.length;
// arr[2] = arr.length;
// console.log(arr[0] + (arr[2] % arr[1]));    // 4

// =================== no name !! strange =====================
// let a = { x: 20, y: 45, z: 60 }.x;       // свойство х обращается с этому же объекту
// let b = { a: 10 }.a + a;
// console.log(b);     // 30

// =================== no name =====================
// const a = 1;
// const b = 3;
// console.log(a / b);
// console.log((a / b).toFixed(2));

// const result = 300;
// console.log(result.length);     // undefined

// const a = (1, 2, 3);
// console.log(a);     // 3

// var x = 5;
// var y = x++;
// console.log(x++ - y--); // 1
// console.log(++x - ++y); // 1

// =================== no name =====================
// const str = "hello world";
// const words = str.split(" ");
// const obj = {};
// for (let i = 0; i < words.length; i++) {
//   obj[words[i]] = words[i];
// }
// console.log(obj);   // {hello: "hello", world: "world"}

// =================== no name =====================
// class myClass {}

// var obj1 = new myClass();

// var obj = myClass(); // Class constructor myClass cannot be invoked without 'new'

// =================== no name =====================
// var x = 12;
// console.log("x" + (12 % 4));    // x0

// =================== no name =====================


// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
