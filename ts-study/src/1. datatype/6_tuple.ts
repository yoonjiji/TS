/**
 * 배열(Array) : 동일한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장해 놓은 객체, Heap에 저장됨
 * 튜플(Tuple) : 다양한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장함, Heap에 저장
 *               인덱스별로 데이터 타입을 정의
 * 튜플 정의 형식
 * const(let) 변수명: [데이터타입, 데이터타입,...] = [데이터1, 데이터2..];
 */

const num: number = 100;
const numArray: number[] = [1, 2, 3, 4, 5];
// const numTuple2: [number, string, boolean, number] = [1, "hong", true, 3];
const numTuple = [1, "hong", true, 3]; // 데이터 타입 안줘도 컴파일러가 알아서 타입 넣어줌

// const [] = 함수명; // 구조분해 할당을 이용하여 인덱스 별로 튜플에 저장함
const [a, b, c, d] = numTuple;

console.log(num);
console.log(numArray);
console.log(numTuple);
console.log(a, b, c, d);
