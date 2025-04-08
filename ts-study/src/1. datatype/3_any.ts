/**
 * any 타입은 타입을 제한하지 않고, 동적으로 값을 입력받을 수 있음
 */

let obj: any = { x: 100 };
console.log(typeof obj); // object

obj = 200;
console.log(typeof obj); // number

obj = "Object";
console.log(typeof obj); // string
