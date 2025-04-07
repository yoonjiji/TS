/**
 * 타입스크립트의 Primitive 데이터 타입 실습
 * 변수 정의 : const(let) 변수명 : 타입정의 - 값(데이터);
 *
 */

// 정수형 데이터
let number1: number = 100;
number1 = 200;
console.log(number1);

// 실수형 데이터
let dnumber1: number = 1.234;
dnumber1 = 300;
console.log(dnumber1);
// 정수와 실수형은 동적으로 데이터 적용 가능 (에러 안뜸)

// 불린
let flag: boolean = false;
const flag2: boolean = !flag;
console.log(flag, flag2);

// 배열 : 문자열 타입 - 홍길동, 홍길순, 홍길영
// const names: string = ["홍길동", "홍길순", "홍길영"]; X
// => reference 자체를 string으로 지정하는 것은 안된다. (객체안에 데이터값을 string을 준게 아님)
const names = ["홍길동", "홍길순", "홍길영"]; // 타입 지정 안해도 출력
const names2: string[] = ["홍길동", "홍길순", "홍길영"];
console.log(names);
console.log(names2);

// 초기값 : undefined(원시데이터 초기값), null(참조, 객체 데이터 초기값)
const initName = undefined; // 타입 지정 안해도 출력
const initName2: undefined = undefined;
const initArray = null; // 타입 지정 안해도 출력
const initArray2: null = null;
console.log(initName, initArray);
console.log(initName2, initArray2);

// typeof
const x: number = 100;
const xx: string = "100";

// console.log("값의 비교 >>", x === xx); // 타입이 바뀌면 비교도 안됌
console.log("타입의 비교 >>", typeof x === typeof xx); // 타입비교는 가능
