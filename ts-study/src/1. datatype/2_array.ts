/**
 * 타임스크립트 배열 방식
 * const(let) 배열변수명:타입정의[] = [데이터];
 * const(let) 배열변수명:Array<타입정의> = new Array();
 */

// 1,2,3,4,5 숫자를 저장하는 배열 생성
const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = new Array(1, 2, 3, 4, 5);
// <> 꺽쇠는 제너릭이라고 부른다

console.log(numArray1[0]);
console.log(numArray2.length);

// 배열의 메소드 : forEach, for...in, for...of, map...
numArray1.forEach((number, i) => console.log("numArray1>>>", number));
numArray2.forEach((number, i) => console.log("numArray2>>>", number));

// for...of
for (const n of numArray1) console.log("for...of1 >>>", n);
for (const n of numArray2) console.log("for...of2 >>>", n);
