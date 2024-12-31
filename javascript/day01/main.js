console.log('Hello world!');

// alert("Hello world!");

// Khai báo biến và không gán giá trị cho biến
let age;
console.log(typeof age);
age = 35;
console.log(typeof age);

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn";
console.log(typeof email);

const PI = 3.14;
// PI = 3.14159; // Error

let firstName = "Hien"; // camelCase
let last_name = "Nguyen"; // snake_case

let $fullName = "Hien Nguyen"; // Global scope

// C1: REGULAR FUNCTION
function sum(a, b) {
    let num = 11111; // Function scope
    console.log("Num = " + num);
    return a + b;
}
console.log(sum(10, 20));

// C2: Function expression
let sum1 = function (a, b) {
    return a + b;
}
console.log(sum1(100, 20));

// C3: Arrow function ES6 || Lambda expression - Java8
let sum2 = (a = 100, b = 200) => { // Default parameter ES6
    console.log(a, b);
    return a + b;
}
console.log(sum2(500, 600));

{
    let x = 10000;
    console.log(x);
}

let name = "Bùi Hiên"
let year = 1997
let message = `Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`
console.log(message);

let message1 = "Xin chào các bạn, mình tên là " + name + ". Năm nay " + (2022 - year) + " tuổi";
console.log(message1);