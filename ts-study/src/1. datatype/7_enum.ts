/**
 * enum(enumeration) - 열거형으로 표현되는 데이터를 저장하는 형식
 * 정의 형식
 * cosnt(let) 변수명 {
 *      enum item1, // 인덱스 0
 *      enum item2, // 인덱스 1
 *      ...
 * }
 */
// 프로퍼티 값을 사용자가 부여해야함
const objLiteral = {
  name: "홍길동",
  age: 30,
};

// 프로퍼티 값이 인덱스0 이런식으로 자동으로 이름 부여됨
enum objEnum {
  TypeScript = "타입스크립트", //0
  JavaScript = "자바스크립트", //1
}

console.log(objLiteral.name);
console.log(objEnum.TypeScript);

// 출력 형식의 차이점
// objLiteral --> for.. in 사용 ❌, object.keys() : [name, age] --> forEach을 적용해서 출력
const keys = Object.keys(objLiteral);
console.log(keys); // [ 'name', 'age' ]
console.log(`forEach ------------->`);
keys.forEach((key) => {
  console.log(`${key} : ${objLiteral[key as keyof typeof objLiteral]}`);
});

// objEnum --> for..in 사용 ⭕
// enum에 const를 붙이면 변수타입으로 실행하기 때문에 이터러블 적용X
/** 요렇게
 * enum objEnum {
 * TypeScript = "타입스크립트", //0
 * JavaScript = "자바스크립트", //1
 * }
 */
console.log(`objEnum : for...in ------------->`);
for (const key in objEnum) {
  console.log(`${key} : ${objEnum[key as keyof typeof objEnum]}`);
}
