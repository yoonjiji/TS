/**
 * 타임스크립트 함수 선언 :
 *
 * 기본함수 선언 :
 * function 함수명(파라미터:파라미터 타입) : 반환값 타입(반환값이 없으면 X) {
 *      실행로직
 *  return 반환값;
 * }
 */

// greet1("홍길동") --> 화면출력 : 반갑습니다. 홍길동님!!!
function greet1(pname: string) {
  console.log(`반갑습니다. ${pname}님!!!`);
}
greet1("홍길동");

// greet1("홍길동", 30) --> 반환값 : 홍길동의 나이는 30입니다.
function greet2(pname: string, age: number): string {
  return `${pname}의 나이는 ${age}입니다`;
}
const str: string = greet2("홍길동", 30);
console.log(greet2("홍길동", 30));
console.log(str);

// greet3("Alice", "서울시 강남구") : 화살표 함수
// 화면출력 : 이름 - Alice, 주소 - 서울시 강남구
// age 나이를 입력받는 변수, 단, 타입은 정해지지 않음!! => 권장사항은 아님
// age는 필수 입력 사항이 아닌 선택 사항
const greet3 = (pname: string, address: string, age?: any) => {
  age
    ? console.log(`이름 - ${pname}, 주소 - ${address}, 나이 - ${age}`)
    : console.log(`이름 - ${pname}, 주소 - ${address}`);
};
greet3("Alice", "서울시 강남구", "스물");
greet3("Alice", "서울시 강남구", 20);
greet3("Alice", "서울시 강남구"); // 에러 안뜨고 age undefined 뜸

// greet4(1,2,3,4,5) 값을 입력받아 배열객체로 화면 출력
const greet4 = (...params: any[]) => {
  console.log(params);
};
// greet4([1, 2, 3, 4, 5]); // 스프레드 연산자 x
greet4(1, 2, 3, 4, 5); // 스프레드 연산자 쓰면 이렇게 사용 가능
greet4("🍎", "🍊", "🥝", "🍋", "🍏"); // 스프레드 연산자 쓰면 이렇게 사용 가능
