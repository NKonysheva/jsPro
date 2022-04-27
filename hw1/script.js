// var name = 'Vasya';
// name = 123;

// const name = 'Vasya';
// name = 123;
//
// console.log(name);

// var global = 1;
//
// function foo() {
//     var a = 1;
//
//     console.log(a);
//     console.log(global);
// }
//
// foo();
//
// console.log(global);

// var a;

// console.log(a);
//
//
// var a = 1; // a = 1;
//
// console.log(a);

// let a = 1;
//
// {
//     let b = 2;
//     console.log(a);
//     console.log(b);
//
//     {
//         let c = 5;
//         console.log(c);
//     }
//
//     console.log(c);
// }
//
// console.log(a);
// console.log(b);

// function passTest(result) {
//     // var ...
//     // var ...
//     if (result) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(true);

// function passTest(result) {
//     // let firstName;
//     // let yearOfBirth;
//     if (result) {
//         firstName = 'John';
//         yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(true);

// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// console.log(i);

// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// console.log(i);

// 'use strict';
// function a() {
//     // 'use strict';
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
// a();
// function b() {
//     // 'use strict';
//     var b = 5;
//     let c = 10;
//     d = 20;
// }
// b();

// console.log(b);
// console.log(c);
// console.log(d);

// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '.' + ' Ему сейчас ' + calcAge(yearOfBirth));

// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2022 - year;
// }

// console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);
// console.log('${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}');

// const str = `${firstName} ${lastName}`;
//
// console.log(str);
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));

// const calcAge = () => {
//     return 6;
// };
// const calcAge = (x) => {
//     return 6 + x;
// };
// const calcAge = x => 6 + x;
// const calcAge = (x, y = 10) => {
//     console.log(arguments);
//     return 6 + x + y;
// };
//
// console.log(calcAge(1, 2));

// var box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         console.log(this);
//         var _this = this;
//         // document
//         //     .getElementsByClassName('green')[0]
//         //     .addEventListener('click', function () {
//         //         console.log(this); // ?
//         //         console.log('Box number ' + _this.position + ' and color ' + _this.color);
//         //     });
//         document
//             .getElementsByClassName('green')[0]
//             .addEventListener('click', function () {
//                 console.log(this); // ?
//                 console.log('Box number ' + this.position + ' and color ' + this.color);
//             }.bind(this));
//     }
// };

// const box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document
//             .getElementsByClassName('green')[0]
//             .addEventListener('click', () => {
//                 console.log('Box number ' + this.position + ' and color ' + this.color);
//             });
//     }
// };
//
// box.clickMe();

// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);
//
// const arr = ['John', 25, true];
// // const [name, age, isAdmin] = arr;
// const [name,, isAdmin] = arr;
//
// // console.log(name, age, isAdmin);
// console.log(name, isAdmin);

const obj = {
    firstName: 'John',
    lastName: 'Snow',
    colors: ['white', 'black'],
};

const { firstName: n, lastName: ln, colors: [a, b] } = obj;

console.log(n, ln, a, b);
