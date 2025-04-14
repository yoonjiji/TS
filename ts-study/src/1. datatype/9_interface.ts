// 기존에 부모 클래스는 힙메모리에 올라간다. => 8_class2.ts Animal class 참조
// 하지만 super 참조하면 힙에 부모 클래스가 같이 저장된다.
// 부모의 일반적인 정보를 자식이 참조만 할 거면 굳이 또 메모리에 올라갈 필요가 있을까?
// 또한 body를 작성하면 코드도 길어진다.
// 자식클래스는 부모의 일반 정보를 super로 참조만하지 직접 클래스를 또 생성할 일이 없다.
// 이런 단점을 보완하려고 TS에서 interface가 나왔다.

/**
 * 인터페이스 : 클래스 형식의 객체 타입 정의, body없이 header만 정의, 메모리 생성 불가
 */

interface AnimalInterface {
  name: string;
  blood: string;
  color: string;

  sleep(): void; // class와 다르게 body 사라짐
}
// const at: AnimalInterface = new AnimalInterface(); // AnimalInterface 단독으로 객체 생성 불가!!!

// 인터페이스 상속시 implements 키워드 사용
// 속성과 함수를 모두 반드시 오버라이딩(OverRiding) 해야함!!
// 오버라이딩은 부모가 가지고 있는 속성과 함수를 그대로 상속받아 구현하는 것을 의미함
interface DogInterface {
  // DogInterface를 인터페이스 형태로 수정 => 메모리에 안올라감
  name: string;
  blood: string;
  color: string;
  type: string;
}

// 구현 클래스 정의(메모리에 올림)
class implClass implements AnimalInterface {
  name: string;
  blood: string;
  color: string;
  type: string;

  constructor(name: string, blood: string, color: string, type: string) {
    (this.name = name),
      (this.blood = blood),
      (this.color = color),
      (this.type = type);
  }

  sleep(): void {
    console.log(`${this.name}가 잠을 자요`);
  }
}

const haha: DogInterface = new implClass("하하", "O", "흰색", "섀퍼드");
console.log(
  `이름 : ${haha.name}, 혈액형 : ${haha.blood}, 색상 : ${haha.color}, 종 : ${haha.type}`
);
