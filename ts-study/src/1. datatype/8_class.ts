/**
 * 타입스크립트의 클래스 타입
 * 클래스는 객체 타입으로 OOP의 Encapsulation(캡슐화)이 적용된 타입이다.
 * 클래스간의 상속이 가능하며, 이를 통해 확장성이 높다. 단, 메모리 효율성이 좋지 않다.
 * 클래스의 실행은 인스턴스를 생성하여 사용되며, new 라는 키워드를 통해 실행된다.
 * 클래스 정의 형식 : 변수 + 함수
 * ❗❗클래스 정의 전 생성할 클래스에 대한 객체 설계가 필요함
 * class 클래스명 {
 *      fields(필드명:변수) 선언
 *      constructor(생성자) 선언
 *      function(함수) 선언
 * }
 * 인스턴스 생성 형식
 *  class의 인스턴스이름 = new class의 생성자함수()
 * ❗❗class의 생성자함수는 클래스이름과 동일!!!
 */
// 객체 설계(모델링) : 객체는 실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념
// ex) 상철씨는 출근 전에 아아 한 잔 주문해서 사무실에 들어간다
//   --> 고객, 카페, 메뉴
//   --> 고객 : 이름, 나이, 메뉴, 금액, 주문한다
//   --> 카페 : 이름, 메뉴리스트, 음료를 만든다
//   --> 카페메뉴: 메뉴명, 가격
// UML을 통해서 설계

// 메뉴(Menu) 클래스 선언
class Menu {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// 고객(Customer) 클래스 선언
class Customer {
  // fields
  name: string;
  age: number;
  menu: Menu;
  money: number;

  // constructor
  // fields값 초기화
  constructor(name: string, age: number, menu: Menu, money: number) {
    // Customer()
    this.name = name;
    this.age = age;
    this.menu = menu;
    this.money = money;
  }
  // function
  order(): void {
    console.log(`${this.name}이 ${this.menu.name}을(를) 주문을 한다`);
  }
}

// 인스턴스 생성
const hong: Customer = new Customer(
  "홍길동",
  30,
  new Menu("아이스아메리카노", 10),
  100
);
console.log(hong.name);
console.log(hong.age);
console.log(hong.menu);
console.log(hong.money);
hong.order();
