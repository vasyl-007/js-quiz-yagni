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

// =================== no name !!! =====================
// (function (x) {
//   delete x;             // syntax error
//   console.log(x);
// })(1);

// =================== no name !!!! =====================
// function tobin(num) {
//   var res = "";
//   while (num > 0) {
//     res = (num % 2) + res;
//     num = Math.floor(num / 2);
//   }
//   return res;
// }
// console.log(tobin(4));  // 100

// =================== no name =====================
// var y = 1;
// if (function foo() {}) {
//   y += typeof foo;
// }

// console.log(y); // 1unefined

// =================== no name =====================
// var a = 7;
// var b = 5;
// a = a + 3;
// console.log(2 * (a - b));   // 10

// =================== no name =====================
// for (let i = 0; i < 100; i++) {
//   if (i % 10 == i) console.log(i + "");     // 0 1 2 3 4 5 6 7 8 9
// }

// =================== no name !!! Number =====================
// const arr = Number(200, 400, 100);
// // console.log(arr);   // 200

// if (arr[0] == 200 || arr[1] == 200) {
//   console.log(arr.push(2.0, 200));
// } else if (arr == 200) {
//   console.log(arr.toString(arr.length));    // 200
// } else {
//   console.log(arr.push(200, 2.0));
// }

// =================== no name =====================
// const arr = 200;
// console.log(arr.length); // undefined

// const arr2 = Number(200);
// console.log(arr2.length);      // undefined

// const arr3 = Number(200);
// console.log(arr3.toString(arr3.length));    // 200

// =================== no name !!! =====================
// var x = " ";
// var y;
// if (x == false) console.log("x");
// if (y == false) console.log("y");

// console.log(Boolean(""));   // false
// console.log(Boolean(" "));  // true

// console.log("" == false);   // true
// console.log(" " == false);   // true
// console.log("" === false);   // false
// console.log(" " === false);   // false

// =================== no name =====================
// var a = !undefined;
// var b = !NaN;
// var c = !null;
// console.log(a); // true
// console.log(b); // true
// console.log(c); // true

// console.log(a + b + c); // 3

// =================== no name =====================
// var a = [9, 5, 2];
// for (var i = 1; i < 3; i++) {
//   a[0] %= a[i];
// }
// console.log(a[0]);  // 0

// =================== no name !!! =====================
// function sum(x, y) {
//   x += y;
//   var z = x.replace(y, "5");
//   console.log(z);
// }
// sum("7", "3");      // 75

// =================== no name =====================
// const f = (...args) => {
//   return args.push(7);         // push возвращает новую длину массива
// };
// console.log(f(2, 4, 5));    // 4

// =================== no name !! =====================
// var arr = [];
// var sum = 0;
// for (let i = 0; i < 5; i++) {
//   arr[i] = i;
//   sum += arr[i];
// }
// console.log(sum);   // 10

// =================== no name !!! =====================
// var Lang = ["java", "C", "C++", "C#", "python"];
// var x = Lang.pop();
// var y = Lang.push("kotlin");
// console.log(y + x); // 5python

// =================== no name !!! cool =====================
// var input = 407;
// var res = 0;
// for (let i = input; i > 0; i = Math.floor(i / 10)) {
//   res = res * 10 + (i % 10);
// }
// console.log(res);   // 704

// =================== no name =====================
// myBlock: {
//   var a = 0;
//   break myBlock;
//   a = 1;
// }
// console.log(a); // 0

// =================== no name =====================
// Object.freeze(Object);
// var obj = {
//   property: "one",
// };
// obj.property = "two";
// console.log(obj); // {property: "two"}

// =================== no name !!! =====================
// function addBin(a, b) {
//   var sum = a + b;
//   var res = "";
//   while (sum > 0) {
//     res = (sum % 2) + res;
//     sum = Math.floor(sum / 2);
//   }
//   return res;
// }
// console.log(addBin(2, 5));  // 111
// console.log(addBin(1, 5));  // 110

// =================== no name !!!=====================
// function f(a) {
//   var arr = [];
//   var i = 0;
//   while (i < a.length) {
//     if (a[i] % 2 !== 0) {
//       arr.push(a[i + 1]);
//     }
//     i++;
//   }
//   return arr;           // [5, 2]
// }
// var a = [3, 5, 2];
// console.log(f(a));      // [5, 2]

// =================== no name !!! =====================
// for (let i = 0; i < 100; i++) {
//   if (i % 20 == i - 20) console.log(i + ",");   // 20, 21, ... 39
// }

// =================== no name =====================
// const a = Infinity;
// console.log(100 / Infinity); // 0
// console.log(-100 / Infinity); // -0
// console.log(100 / -Infinity); // -0
// console.log(-100 / -Infinity); // 0
// console.log(Infinity / Infinity); // NaN
// console.log(-Infinity / Infinity); // NaN
// console.log(-Infinity / 0); // - Infinity
// console.log(Infinity / 0); // Infinity
// console.log(100 / 0); // Infinity
// console.log(0 / 0); // NaN

// =================== no name =====================
// var str = "hello ";
// var res = str.valueOf();
// console.log(res); // hello
// console.log(res.length); // 6

// var str1 = "world";
// var res1 = str1.valueOf();
// console.log(res.concat(res1)); // hello world
// console.log(res + res1);        // hello world

// =================== no name !!!! strange =====================
// var a = 1 / -Infinity + 5 % Infinity;
// console.log(a);     // 5

// console.log(5 % Infinity);  // 5

// console.log(1 / -Infinity);  // -0
// console.log(1 / Infinity);   // 0
// console.log(-1 / Infinity);   // -0

// console.log(Infinity / -0);  // -Infinity
// console.log(Infinity / 0);  // Infinity

// =================== no name =====================
// var a = 8;
// var b = 3;
// console.log(a % b);     // 2

// var x = 6;
// var y = --x;
// var z = x + y;
// console.log(z % b);     // 1

// =================== no name !!! =====================
// var res = 0;
// for (var i = 1; i <= 10; i += 3) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   res += i;
// }
// console.log(res);   // 8

// =================== no name !!!!! =====================
// var a = [7, 9, 3, 4];
// for (var i = 1; i < 4; i++) {
//   a[0] += a[i] + 1;
// }
// console.log(a[0]);  // 26

// =================== no name =====================
// var sum = 0;
// for (let i = 0; i < 3; i++) {
//   sum += i;
// }
// console.log(i);     // RefErr i is not defined

// =================== no name =====================
// var x = 10;
// var y = 5;
// x = y;
// console.log(x * y);     // 25

// =================== no name !!!! mega cool =====================
// function tobin(num) {
//   var res = "";
//   while (num > 0) {
//     res = (num % 2) + res;            // важен порядок записи (конкатенация строк)
//     num = Math.floor(num / 2);
//   }
//   return res;
// }
// console.log(tobin(4));  // 100

// =================== no name =====================
// if ("Mario" > "Mareo") {
//   console.log("true");      // true
// } else {
//   console.log("false");
// }

// if ("Mark" > "Marks") {
//   console.log("true");
// } else {
//   console.log("false"); // false
// }

// =================== no name =====================
// var x = 1;
// if (x >= 1) {
//   x = 2;        // при выполнении условия переписали значение "х"
// }
// console.log(x);     // 2

// =================== no name =====================
// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(2));   // 0.3 as Number (unar +)
// console.log(sum.toFixed(2));   // 0.30 as String

// =================== no name =====================
// // let arr;     // otherwise infinite loop

// const newArr = ["str", "false", "true"];
// function join() {
//   for (let i = 2; (arr = newArr.length); i <= 2) {
//     console.log(newArr.reverse(arr)[i]);
//   }
//   i++;
// }
// join();     // RefErr "arr" is not defined

// =================== no name =====================
// const foo = Object.freeze({});
// foo.prop = 123;
// console.log(foo.prop);  // TypeError (cannot add property - object is not extensible)

// =================== no name =====================
// (function(x){
//     int x;
//     return x;
// })(1);      // SyntaxError (unexpected indentifier)

// =================== no name =====================
// var count = 6,
//   sum = 0;
// while (count > 0) {
//   sum += 2;
//   count -= 2;
//   if (count == 2) {
//     count = 0;
//   }
// }
// console.log(sum);   // 4

// =================== no name =====================
// const a = Math.exp(16);
// const b = Math.abc(16);     // Math.abc is not a function
// console.log("a: ", a);
// console.log("b: ", b);

// =================== no name =====================
// console.log(7 > 100 < 5);   // true
// console.log(7 > 100 > 5);   // false
// console.log(7 > 100 > 5 == true);   // false

// =================== no name !!! =====================
// const t = {
//   val: 1,
// };
// const x = () => (t.val += t.val);
// const y = () => (t.val *= t.val);
// console.log(x() + y());         // 6    т.к.    t.val обновляется

// =================== no name =====================
// var x = 0;
// var a = [3, 4];
// a[x] = ++x;
// console.log(a[0]); // 1

// =================== no name !!!!! ====================
// var a = [9, 5, 3];
// for (var i = 1; i < 3; i++) {
//   a[0] %= a[i];
// }
// console.log(a[0]); // 1

// =================== no name =====================
// var b = 0;
// for (var i = 0; i <= 2; i++) {
//   for (var j = 0; j <= 3; j++) {
//     b++;
//   }
// }
// console.log(b);     //12

// =================== no name =====================
// let p = [5, 4, 3, 2, 1, 6, 6, 9];
// function first(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
//       //   console.log(arr[i]);
//       return arr[i];
//     }
//   }
//   return null;
// }
// console.log(first(p)); // 4

// =================== no name =====================
// var i = 0,
//   j = 0,
//   count = 0;
// for (; i < 3; i++) {
//   for (; j < 3; j++) {
//     count++;
//   }
// }
// console.log(count);     // 3

// =================== no name =====================
// var x = 1001;
// var y = 1000;
// x -= y;
// y -= y;
// if (x)
//   do
//     console.log(y); // 0
//   while (y);

// =================== no name =====================
// var num = 3;
// num += "2";
// num = +num;
// console.log(num);   // 32

// =================== no name =====================
// console.log("2" > "12");    // true
// console.log("510" < "42");    // false
// console.log("510" < "511");    // true

// =================== no name =====================
// let foo = new Set([0, "3", 2, 4, 3]);
// console.log(foo.size);      // 5

// =================== no name =====================
// var x = 0;
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j <= 2; j++) {
//     ++x;
//   }
// }
// console.log(x);     // 30

// =================== no name !!!! =====================
// var y = "JaVaScRiPt";
// console.log(y.charAt(0).toUpperCase() + y.substr(1).toLowerCase()); // Javascript

// console.log(y.charAt(0));   // J
// console.log(y.substr(1));   // aVaScRiPt
// console.log(y.substr(1).toLowerCase());   // avascript

// method substring() == slice()

// =================== no name =====================
// const someValue = 0;

// console.log(!someValue);
// console.log(someValue === false);

// =================== no name =====================
// var f = [
//   function (a, b) {
//     return a + b;
//   },
//   function (a, b) {
//     return a - b;
//   },
//   function (a, b) {
//     return a * b;
//   },
//   function (a, b) {
//     return a / b;
//   },
//   function (a, b) {
//     return a % b;
//   },
// ];
// var x = f[0](4, 6);
// var x = f[3](x, 6);
// var x = f[4](18, x);

// console.log(x);     // 1.3333333333333326

// =================== no name !!! =====================
// Array.prototype.exe = () => {
//   return Math.max(this);
// };
// let arr = [3, 9, 6];
// console.log(arr.exe());     // NaN

// =================== no name !!!!! =====================
// class Person {
//   constructor(name, age) {
//     this._name = name;          // идет на экземпляр класса
//     this._age = age;
//   }
//   get name() {                  // идет на прототип
//     return this._name;
//   }
//   get smth(){}                  // идет на прототип
// }
// let john = new Person("jhonny", 15);
// console.log(john.name);                 // jhonny

// console.log(john)

// =================== no name !!!! =====================
// var arr = [3, 6, 1, 5];
// for (var i = 0; i < 3; i += 2) {
//   arr[0] += arr[i];
// }
// console.log(arr[0]);    // 7

// =================== no name !!!! =====================
// function factorial(x) {
//   for (let i = 1; i <= x - 1; i++) {
//     let y = i + 1;
//     var fact = i * y;
//   }
//   return fact;
// }
// console.log(factorial(3));      // 6

// =================== no name !!!!! =====================
// var arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
// var index = arr.indexOf(9);     // -1       внутри indexOf() записываем индекс
// var result = index < 0 ? 1 : 0;
// console.log(result);            // 1

// =================== no name =====================
// console.log(2 <= 1 && 11 < 14);     // false

// =================== no name =====================
// console.log(-"1" + 1 + "2");    // 02   as string

// console.log(-"1"); // -1 as number

// =================== no name =====================
// function sum(a, b) {
//   return a * b;
// }
// var x = sum(11, 7);
// console.log(x % 6); // 5

// =================== no name !!! =====================
// var i = 0;
// var a = {
//   ["try" + ++i]: i + 1,
//   ["try" + ++i]: i + 2,
// };
// console.log(a.try1);    // 2
// console.log(a.try2);    // 4

// =================== no name =====================
// function bin(num) {
//   var res = "";
//   while (num > 0) {
//     res = (num % 2) + res;
//     num = Math.floor(num / 2);
//   }
//   return res;
// }
// console.log(bin(6));    // 110

// =================== no name !!! tricky =====================
// (function () {
//   var i = j = 6;
// })();
// console.log(j); // 6

// =================== no name !!! =====================
// function f(a) {
//   var arr = [];
//   var i = 0;
//   while (i < a.length) {
//     if (a[i] % 2 !== 0) {
//       arr.push(a[i]);
//     }
//     i++;
//   }
//   return arr;
// }
// var a = [1, 4, 3, 5];
// console.log(f(a)); // [1,3,5]

// =================== no name !!!!!!! cool =====================
// class Base {
//   constructor(n) {
//     this.num = ++n;
//   }
// }
// class Derived extends Base {
//   constructor(n) {
//     super(n++);
//     this.num = ++n;
//   }
// }
// let obj = new Derived(7);
// console.log(obj.num);       // 9

// =================== no name !!!! strange =====================
// function obj() {
//   _this = this;
// }
// var a = new obj();
// console.log(a == _this);    // RefErr _this is non defined

// =================== no name =====================
// var arr = [2,3,4];
// var lit = `${...arr}`;      // SyntaxError (an Array can't be transferred to Object)
// console.log(lit[0]);

// =================== no name =====================

// var arr2 = [2, 3, 4];
// var lit = [...arr2]; // array
// console.log(lit[0]); // 2

// =================== no name !!! pay attention =====================
// function calc(i) {
//   return i * i;
// }
// for (var i = 1; i < 3; i++) {
//   console.log(calc(i));         // 1  4
// }

// =================== no name !!! pay attention and compare with the previous one ===============
// function calc2(i) {
//   return i * i;
// }
// for (var i = 1; i < 3; i++) {}
// console.log(calc2(i)); // 9

// =================== no name !!! =====================
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name + "makes a noise");
//   }
// }
// class Lion extends Animal {
//   speak() {
//     console.log(this.name + " roars");
//   }
// }
// let lion = new Lion("King");
// lion.speak();   // King roars

// =================== no name !! =====================
// var y = 0;
// for (var x = 1; x < 5; x++) {
//   if (x == 3) {
//     x = 5;
//   }
//   y++;
// }
// console.log(y);     // 3

// =================== no name =====================
// const str = "hello world";
// const words = str.split(" ");
// const obj = {};
// for (let i = 0; i < words.length; i++) {
//   obj[words[i]] = words[i];
// }
// console.log(obj);     // {hello: "hello", world: "world"}

// =================== no name =====================
// var y = 0;
// for (var x = 1; x < 5; x++) {
//   if (x === 3) {
//     x = 5;
//   }
//   y++;
// }
// console.log(y);     // 3

// =================== no name ! =====================
// class StaticMethods {
//   static methodOne() {
//     return "world";
//   }
//   static methodTwo() {
//     return this.methodOne() + "hello";
//   }
// }
// let a = StaticMethods.methodTwo();
// console.log(a); // worldhello

// const abc = new StaticMethods();
// console.log("abc", abc);

// =================== no name !!!  =====================
// var x = 3;
// var one = {
//   x: 2,
//   two: {
//     x: 1,
//     three: function () {
//       return this.x;
//     },
//   },
// };
// var go = one.two.three;
// // console.log(one.two.three() + "" + go());   //  13

// console.log(one.two.three());   //  1

// =================== no name !!! =====================
// var k = 6;
// for (var i = 0; i < k; i++) {
//   k += 0.5;
// }
// console.log(i);   // 12

// =================== no name !! =====================
// var x = [typeof x, typeof y][1];
// console.log(typeof x); // string

// const a = 10;
// const b = 20;
// const c = [typeof a, typeof b][1];
// console.log(c);     // number

// const c1 = [a, b][1];
// console.log(c1);    // 20

// =================== no name =====================
// class StaticMethods {
//   static methodOne() {
//     return "world";
//   }
//   static methodTwo() {
//     return this.methodOne() + "hello";
//   }
// }
// let a = StaticMethods.methodTwo();
// console.log(a);         // worldhello

// =================== no name =====================
// var numArr = [0, 1, 2, 3, 0, 5, 0];
// console.log(numArr.lastIndexOf(0)); // 6
// console.log(numArr.indexOf(0)); // 0

// =================== no name !!! =====================
// var ls = [];
// function f(r) {
//   return r === 0 ? [] : [(ls[ls.length] = ls.length + 1), ...f(r - 1)];
// }
// console.log(f(5));    // [1, 2, 3, 4, 5]

// =================== no name !! =====================
// var a = [9, 1, 1, 0];
// // console.log("a.slice()", a.slice(1, 3));

// var c = [];
// c[0] = a.slice();
// a[0] = 0;
// console.log(c[0]);

// // c[1] = 1;
// // console.log("c", c);

// =================== no name !!!!!! =====================
// function p(a, b) {
//   if (b == 1) {
//     return a;
//   } else {
//     return a * p(a, --b);
//   }
// }
// console.log(p(2, 3)); // 8

// =================== no name =====================
// var x = 2;
// var y = 3;
// var a = "true";
// var b = "false";
// if (x > 0 && y > 5) {
//   console.log(a);
// } else {
//   console.log(b);   // fasle
// }

// =================== no name =====================
// var num = 3;
// num += "2";
// num = +num;
// console.log(num); //32

// =================== no name =====================
// var x = 0;
// if (!true) {
//   x = 1;
// } else if (false) {
//   x = 2;
// } else {
//   x = 3;
// }
// console.log(x);   // 3

// =================== no name ! =====================
// var a = [0, 1, 2, 3];
// var b = [];
// for (let i = 0; i <= a.length; i++) {
//   if (i == a[i]) {
//     b.push(i++);
//   }
// }
// console.log(b); // [0, 2]

// =================== no name =====================
// class StaticMethods {
//   static methodOne() {
//     return "world";
//   }
//   static methodTwo() {
//     return this.methodOne() + "hello";
//   }
// }
// let a = StaticMethods.methodTwo();
// console.log(a); // worldhello

// =================== no name strange =====================
// const foo = Object.freeze({});
// foo.prop = 123;
// console.log(foo.prop);    // TypeError

// =================== no name strange =====================
// var arr = [5,6,8];
// var str = (string)arr;
// var bool = (boolean)str;
// console.log(bool);    // SyntaxError

// =================== no name ! =====================
// var str = "1 one 2 two 3 three";
// var reg = /[0-9]/gim;
// var res = str.match(reg);
// console.log(res);     // ) ["1", "2", "3"]

// =================== no name !!!! cool =====================
// var ls = [];
// function f(r) {
//   return r === 0 ? [] : [(ls[ls.length] = ls.length + 1), ...f(r - 1)];
// }
// console.log(f(5)); // [1, 2, 3, 4, 5]

// =================== no name =====================
// var a = 3,
//   b = 7;
// if (a++ > 5 && b > 4) console.log(b);
// else console.log(a);    // 4

// =================== no name reload the window =====================
// location.reload()

// =================== no name =====================
// const x = [NaN == NaN, typeof null, typeof NaN];
// console.log(x.join("-")); // false-object-number

// console.log(NaN == NaN);  // false

// =================== no name =====================
// const abc = [1, 2, 3, 4, 5];
// console.log(abc.slice(3)); // [4, 5]

// const x = [1, 2, 3, 4, 5];
// const pushMethod = x.push(3);
// console.log(pushMethod); // 6     new length of the array

// const a = [1, 2, 3, 4, 5];
// console.log(a.splice(3)); // [4, 5]
// console.log(a); // [1, 2, 3]

// const y = [1, 2, 3, 4, 5];
// console.log(y.unshift(10)); // 6   new length of the array
// console.log(y.shift()); // 10   deleted one element which value is 10

// =================== no name ! =====================
// let num = new Map();
// num.set("1", "one").set("2", "two");
// console.log(num.has("one")); // false
// console.log(num.has("1")); // true

// =================== no name !!! need to refresh =====================
// function fetchPokemon(pokemonIndex) {
//   return fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`
//   ).then((data) => data.json());
// }

// function insertToDom(pokemonInfo) {
//   const body = document.querySelector("body");
//   const image = document.createElement("img");
//   image.src = pokemonInfo.sprites.front_default;

//   body.appendChild(image);

//   return pokemonInfo;
// }

// function logPokemonName(pokemonInfo) {
//   console.log(`Pokemon ${pokemonInfo.name} is rendered`);
//   return pokemonInfo;
// }

// function createDelay(data, time) {
//   return new Promise((resolve, reject) => {
//     reject("Error");
//     setTimeout(() => resolve(data), time);
//   });
// }

// async function fetchPokemonWithAwait() {
//   let errorText = null;
//   const pokemonIndexes = [11, 15, 21, 41, 55, -12];

//   const pokemonsList = await Promise.all(
//     pokemonIndexes.map((i) =>
//       fetchPokemon(i).catch((error) => {
//         console.log(error);
//         errorText = `Pokemon with index ${i} fetch failed`;
//       })
//     )
//   );

//   console.log(errorText);

//   pokemonsList.forEach((pokemon) => {
//     logPokemonName(pokemon);
//     insertToDom(pokemon);
//   });
// }

// function fetchPokemonWithPromiseThen() {
//   fetchPokemon(74)
//     .then(insertToDom)
//     .then((pokemon) => createDelay(pokemon, 4000))
//     .then(logPokemonName)
//     .catch((error) => console.log("Error in promise: ", error));
// }

// =================== no name =====================
// var x = 5;
// var y = x++;
// var z = x++ - y--;
// console.log(x);     // 7

// =================== no name =====================
// function foo() {
//   var v = "SoloLearn";
//   v = v.substr(4, 5);
//   console.log(v);     // Learn
// }
// foo();

// =================== no name ! =====================
// let num;
// function func() {
//   num = 4;
// }
// num = 5;
// func();
// console.log(num);   // 4

// =================== no name =====================
// var x = 1;
// function y() {
//   console.log(10);
// }
// console.log(x);     // 1
// y();                // 10

// =================== no name ! =====================
// var a = 1;
// for (let i = 0; i <= 5; i++) {
//   i += 2;
//   a *= 2;
// }
// console.log(a);   // 4

// =================== no name !!!  reverse string ==================
// const str = "This text should be reversed";

// function reverse(str) {
//   console.log(str.split("").reverse().join(""));
// }
// reverse(str);     // desrever eb dluohs txet sihT

// =================== no name !!!! interesting =====================
// var len = 0;
// for (let ch of "Solomon") {
//   if (ch > "a" && ch < "z") len++;
// }
// console.log(len);     // 6

// =================== no name =====================
// console.log("N" > "B" || "1" === 1 || "E" < "Z");   // true

// =================== no name !!! cool =====================
// var a = (function func(num) {
//   if (num == 0) return 1;
//   return 1 + func(num - 1);
// })(3);
// console.log(a);     // 4

// =================== no name ! =====================
// var txt = "My phone is A1B2C3";
// var res = txt.length - 2 + Math.PI;
// console.log(Math.ceil(res));    // 20

// =================== no name valid =====================
// function first() {
//   return {
//     a: "first",
//   };
// }
// function second() {
//   return {
//     b: "second",
//   };
// }
// console.log(second());

// =================== no name not valid =====================
// function first() {
//   return "first";
// }
// function second() {
//   return {
//     "second"
//   };
// }
// console.log(second());

// =================== no name =====================
// var l1 = ["java", "ruby", "python"];
// var l2 = ["JS", "html"];
// var courses = l2.concat(l1);
// console.log(courses[1]);    // html

// =================== no name =====================
// var x = 0;
// if (true && false) {
//   x = 1;
// } else if (true || false) {
//   x = 2;
// } else {
//   x = 3;
// }
// console.log(x);   // 2

// =================== no name =====================
// for (let i = 10; i <= 15; i++) {
//   console.log(45 - i);            // range bewteen 30 .... 35
// }

// =================== no name =====================
// var str = "Hello";
// console.log(str[str.length - 3].length);  // 1
// console.log(str[str.length - 5]);  // H

// =================== no name =====================
// var solo = new (function() {
//   var self = this;
//   self.learn = {
//     value: "great!",
//     get: function() {
//       return self.learn.value;
//     }
//   }
// })();
// console.log(solo.learn.get());    // great!

// =================== no name =====================
// for (var num = 2; num <= 4; num++) {
//   var newNum = "";
//   if (num % 3 === 0) newNum += "fizz";
//   if (num % 5 === 0) newNum += "buzz";
//   console.log(newNum);                    // fizz
// }

// =================== no name =====================
// var a = "2" < "8";
// var b = 2 < 8;
// var c = undefined === null;
// if (a && c) console.log("a");
// if (a && b) console.log("b");     // b
// else console.log("c");

// =================== no name set =====================
// const arr = ["apple", "orange", "apple", "pear"];
// const result = [...new Set(arr)];
// console.log(result[2]);       // pear

// =================== no name =====================
// var s =
//   "This., -/ ' ' is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// var finalString = punctuationless.replace(/\s{2,}/g, " ");

// console.log("source string: ", s);
// console.log("punctuationless string: ", punctuationless);

// =================== no name =====================
// var max = Math.max(true, false);
// console.log(max); // 1

// var max2 = Math.max(true, false, NaN);
// console.log(max2); // NaN

// =================== no name fill =====================
// var arr = [1, 2, 3, 4];
// var x = arr.fill(0, 2, 4);
// console.log(x); // [1, 2, 0, 0]

// =================== no name =====================
// const array1 = [1, 2, 3, 4];

// console.log(array1.fill(0, 2, 4));  // fill with 0 from position 2 until position 4
// // expected output: [1, 2, 0, 0]

// console.log(array1.fill(10, 2));    // fill with 5 from position 1
// // expected output: [1, 2, 10, 105]

// console.log(array1.fill(6));  // expected output: [6, 6, 6, 6]

// =================== no name ! =====================
// var str = "code";
// var res = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   res += str[i];
// }
// console.log(res);   // edoc

// =================== no name =====================
// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }
//   get name() {
//     return this._name;
//   }
// }
// let john = new Person("jhonny", 15);
// console.log(john.name);     // jhonny

// =================== no name =====================
// var a = 2;
// function set() {
//   var a = 5;
// }
// console.log(a);   // 2

// =================== no name =====================
// var a = 2;
// function set() {
//   a = 5;
// }
// set();
// console.log(a); // 5

// =================== no name =====================
// var x = 1 + y();
// console.log(x);   // 3
// function y() {
//   return 2;
// }

// =================== no name ! =====================
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 3000);
// console.log("3");
// setTimeout(function () {
//   console.log("4");
// }, 1000);               // 1 3 4 2

// =================== no name =====================
// var x, y, z;
// x = 4;
// y = 10;
// z = ((y % x) * 5) % 2;
// console.log(z);     // 0

// =================== no name ! =====================
// var x = 4;
// var y = 5;
// var d = 4 + z;
// var z = y - x;
// var c = x + z + d + y;
// console.log(c);         // NaN

// console.log(4 + undefined); // NaN

// =================== no name ! =====================
// function x(y) {
//   return y < 6 && y > 5;
// }
// console.log(x(2));    // false

// =================== no name ! =====================
// console.log("1" - 1 == 0);    // true
// console.log("1" - 1 === 0);    // true

// =================== no name ! =====================
// function ex(x) {
//   try {
//     if (x < 5) throw "error111";
//   } catch (e) {
//     console.log("1");
//     return 1;
//   } finally {
//     console.log("2");
//     return 2;
//   }
// }
// ex(1);    // 1 2
// ex(10);   // 2

// =================== no name ! =====================
// var a;
// var b = 5;
// if (isNaN(a)) {
//   console.log(b);   // 5
// }

// =================== no name =====================
// "use strict";
// const obj1 = {
//   property1: 10,
// };
// const obj2 = Object.freeze(obj1);
// obj2.property2 = 15;                // Error object is not extensible
// console.log(obj2.property2);

// =================== no name ! =====================
// var x = String("Solo");
// var y = String("Solo");
// console.log(x === y);     // true

// =================== no name =====================
// var x = false;
// var y = false;
// var ac = x ? 4 : y ? 5 : 6;
// console.log(ac);            // 6

// =================== no name =====================
// console.log("1" - -"1");  // 2

// =================== no name =====================
// var a = 2;
// set();
// function set() {
//   a = 5;
// }
// console.log(a);   // 5

// =================== no name =====================
// let a = typeof constructor == "object";
// let b = typeof constructor == "function";     // true
// let c = typeof constructor == "undefined";
// console.log(a, b, c);       // false  true  false

// =================== no name =====================
// console.log(+"1" + +"1");   // 2

// =================== no name =====================
// console.log("" == 0);     // true
// console.log("" === 0);    // false

// =================== no name =====================
// for (let i = 0; i < 100; i++) {
//   if (i % 10 === i) console.log(i);     // range (0 - 9)
// }

// =================== no name =====================
// let obj = {
//   1: 0,
//   0: 1,
//   a: 10,
// };
// console.log(obj["1"]); // 0
// console.log(obj["a"]); // 10

// =================== no name !!! =====================
// Number.prototype.reverse = function () {
//   let bar = this + "";          // перевод числа в строку
//   console.log("bar: ", bar)
//   let eggs = "";
//   for (let i in bar) {
//     eggs += bar.charAt(bar.length - i - 1);
//   }
//   return eggs;
// };
// var a = 32,
//   b = 77;
// console.log(a.reverse() + b.reverse()); // 2377

// =================== no name =====================
// var x = true;
// var y = false;
// var z = !(x == y);
// var s;
// if (x !== z ? (s = true) : (s = false));
// console.log(s);           // false

// =================== no name ! =====================
// var a = Math.floor(Math.random() * (20 - 8) + 8);
// console.log(a);       // range 8 - 19

// =================== no name ! =====================
// var str = "Hello";
// console.log(str[str.length - 1].length);    // 1
// console.log(str[4].length)        // 1

// =================== no name =====================
// for (let i = 10; i <= 15; i++) {
//   console.log(45 - i + "");         // range 30 - 35
// }

// =================== no name =====================
// const str = 'Mozilla';

// console.log(str.substr(1, 2));  // expected output: "oz"

// console.log(str.slice(1, 3));   // expected output: "zilla"

// =================== no name ! =====================
// function calc(j, p) {
//   j *= ++p;
//   return j + p;
//   j -= p;
// }
// console.log(calc(2, 2));    // 9

// =================== no name ! =====================
// var a;
// var b = "undefined";
// console.log(+(typeof a == b));    // 1

// =================== no name =====================
// let arr = [1, 2, 2, 3, 3, 5];
// let set = new Set(arr);
// let map = new Map([arr]);

// console.log("map:" + map.size);   // 1
// console.log("set:" + set.size);   // 4

// =================== no name =====================
// for (let i = 0; i < 100; i++) {
//   if (i % 20 == i - 20) {
//     console.log(i + "");          // range 20 - 39
//   }
// }

// =================== no name =====================
// var arr = [1, 3, 4, 2];
// var count = 0;
// for (var x = 0; x < arr.length; x++) {
//   x = arr[x];
//   count++;
// }
// console.log(count);   // 2

// =================== no name =====================
// function logic(a = 1, b = false) {
//   var c = a && b;
//   if (c) {
//     let d = true;
//   } else {
//     let d = false;
//   }
//   return d;
// }
// console.log(logic(0));    // erros d is not defined

// =================== no name =====================
// var x = 15;
// var y = 3;
// x -= y;
// y = x / y;
// console.log(y);   // 4

// =================== no name ! =====================
// var my_set = new Set([0, 1, 2, 3]);
// my_set.push(4);           // error my_set is not a function
// console.log(my_set);

// console.log(my_set)

// =================== no name =====================
// console.log("Itchy" != "Scratchy");   // true
// console.log("apple" === "apple");   // true
// console.log("apples" === "apple");   // false

// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
// =================== no name =====================
