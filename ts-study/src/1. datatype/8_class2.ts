/*
    동물병원 --> 초코(푸들), 삐삐(고양이), 하양이(토끼)
    클래스 설계 : Dog, Cat, Rabbit

    부모 클래스
    속성 : 이름, 혈액형, 색깔
    행위 : 먹는다, 잔다

    자식 클래스 extends Animal
    부모의 속성과 상속을 상속받아 사용할 수 있다.
    속성 : 이름, 혈액형, 색깔
    행위 : 먹는다, 잔다
*/
class Animal {
  name: string;
  blood: string;
  color: string;

  constructor(name: string, blood: string, color: string) {
    this.name = name;
    this.blood = blood;
    this.color = color;
  }
  sleep(): void {
    console.log(`${this.name}가 잡니다.`);
  }
}

// const 초코: Dog = new Dog("초코", "A", "브라운", "푸들");
// Heap에 저장
// 부모 생성자에서 직접 참조 super
class Dog extends Animal {
  type: string;

  constructor(name: string, blood: string, color: string, type: string) {
    super(name, blood, color); // 부모의 생성자 호출
    this.type = type;
  }
}

// Call Stack에 저장
const 초코: Dog = new Dog("초코", "A", "브라운", "푸들");
초코.sleep();
console.log(
  `이름 : ${초코.name}, 혈액형 : ${초코.blood}, 색상 : ${초코.color}, 종 : ${초코.type}`
);

// const 삐삐:Cat = new Cat('삐삐', "B", "흰색");
class Cat extends Animal {
  type: string;

  constructor(name: string, blood: string, color: string, type: string) {
    super(name, blood, color);
    this.type = type;
  }
}

const 삐삐: Cat = new Cat("삐삐", "B", "흰색", "페르시안 고양이");
console.log(
  `이름 : ${삐삐.name}, 혈액형 : ${삐삐.blood}, 색상 : ${삐삐.color}, 종 : ${삐삐.type}`
);

// const 하양이:Rabbit = new Rabbit('하양이', "O", "검정");
class Rabbit extends Animal {
  type: string;

  constructor(name: string, blood: string, color: string, type: string) {
    super(name, blood, color);
    this.type = type;
  }
}

const 하양이: Rabbit = new Rabbit("하양이", "O", "검정", "토끼");
console.log(
  `이름 : ${하양이.name}, 혈액형 : ${하양이.blood}, 색상 : ${하양이.color}, 종 : ${하양이.type}`
);
