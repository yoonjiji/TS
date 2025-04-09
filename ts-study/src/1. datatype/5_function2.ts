/**
 * 타입스크립트 함수 선언 확장
 * 객체 지향 프로그래밍(OOP: Object Oriented Programming)의 특성을 포함하여 함수 선언과 사용이 확장됨
 */

// 함수 선언 후 차후 구현하는 방법 : 함수표현식(화살표)
// greet5("홍길동") => 화면출력 : 이름 - 홍길동
let greet5: (panme: string) => string; // 함수의 타입을 체크
greet5 = (pname: string): string => {
  return `이름 - ${pname}`;
};
console.log(greet5("홍길동"));

// ❗❗함수의 오버로딩(Overloading) : 가상 함수로 정의(abstract function)
// 오버로딩(Overloading) : 동일한 이름의 함수가 여러개 존재하는 것
// 단, 함수의 파라미터(매개변수)의 갯수와 타입은 달라야함!!!
// add(100,200);    add("홍","길동")
function add(p1: number, p2: number): number; // body(구현부) 없이 header만 선언
function add(p1: string, p2: string): string;

/** 반드시 가상함수를 구현 기본 함수 형식으로 정의해야 함 */
function add(p1: any, p2: any): any {
  return p1 + p2;
}
console.log(add(2, 3));
console.log(add("홍", "길동"));

// ❗❗함수에서의 제너릭(Generic) : 객체 타입의 제한을 두는 경우 사용
// 함수 선언시 제너릭을 사용하여, 매개변수와 리턴타입을 통일 할 수 있음
// 제너릭을 통해 함수를 선언하는 경우 매개변수 이름은 중립적으로 정의하는 것을 권장
// 원래 제너릭으로 <>쓰려면 Class가 들어가야함
// 원시타입 string, number, boolean 타입은 Wrapper Class 형식으로 정의되어 있음
function greet6<T>(value: T): T {
  return value;
}
console.log(greet6<string>("홍길동")); // 원시타입인 string 타입의 Wrapper Class인 String 클래스로 자동변환
console.log(greet6<number>(21)); // Number
console.log(greet6<boolean>(true)); // Boolean
console.log(greet6<Boolean>(true)); // Boolean
console.log(greet6<Array<number>>([1, 2, 3, 4, 5]));
console.log(greet6<Array<number>>(new Array(1, 2, 3, 4, 5))); // 11.2.0 이상에서 실행되므로 버젼이슈 발생함

// ❗❗함수의 리턴 타입 : void, never
// void - 리턴값이 없는 경우
// never - 에러 또는 익셉션 값을 리턴하는 경우
function returnVoid(name: string): void {
  console.log(`안녕하세요 ${name}님`);
}
returnVoid("동동");

// function returnNever(): never {
//   throw new Error("never 키워드 테스트 에러"); // 에러를 발생시키는 함수
// }
// returnNever();

// ❗❗콜백함수 - 함수의 매개변수로 입력되는 함수이며, 함수명이 별도로 존재하지 않으며 독립적으로 실행하지 못한다.
// 매개변수(파라미터)로 name: 문자열, 콜백함수를 인자로 갖는다.
// 함수 타입 : const(let) 함수명 () => 리턴타입;
// 콜백 함수 타입 : () => 리턴타입;
function processCall(name: string, callback: (name: string) => number) {
  console.log(`name :: ${name}`);
  const massage = `반갑습니다 ${name}님!!`;
  const result: number = callback(massage); // 여기서도 사용자가 입력한 100을 받아야하기 때문에 number타입 지정
  console.log(`result : ${result}`);
}
processCall("홍길동", (massage) => {
  console.log(massage);
  return 100;
});
// 콜백함수에 100을 넘겨줄 때 processCall 콜백 타입을 number로 지정해준다.
