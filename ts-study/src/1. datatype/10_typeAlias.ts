/**
 * 타입 별칭 - 객체의 타입을 정의함, 인터페이스와 같은 역할로 사용됨
 */
type AnimalType = {
  name: string;
  blood: string;
  color: string;
  sleep(): void;
};

// 타입을 구현하기 위한 클래스 정의
// 오버라이딩 필수!!(단하나도 빠지면 안됨)
class typeClass implements AnimalType {
  name: string;
  blood: string;
  color: string;

  constructor(name: string, blood: string, color: string) {
    this.name = name;
    this.blood = blood;
    this.color = color;
  }
  sleep(): void {}
  info(): void {
    console.log(
      `${this.name}의 혈액형은 ${this.blood}이고, 색깔은 ${this.color}입니다.`
    );
  }
}

// AnimalType의 객체 생성
// const 영식이: AnimalType = new typeClass("영식이", "A", "연갈색");
// 객체의 타입이 AnimalType 이므로 info() 함수 호출 불가
// 영식이.info();

// 객체의 타입이 typeClass 이므로 info() 함수 호출 가능!!
const 영식이: typeClass = new typeClass("영식이", "A", "연갈색");
영식이.info();
