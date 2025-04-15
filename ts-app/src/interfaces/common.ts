/**
 * MenuList interface
 */
// 4. interface 또는 typeAlias를 별도로 저장후 import해서 사용함
// tsconfig.json 파일에 저장된 파일을 경로를 path와 별칭으로 추가한 후 import
export interface Menu {
  // 메뉴는 필수항목만
  name: string;
  emoji: string;
}

export interface MenuPrice extends Menu {
  price?: number;
}

export interface MenuSource extends Menu {
  source?: string;
}

// 근로자
export interface Employee {
  name: string;
  age: number;
  department: string;
}

export interface EmployeeEmoji extends Employee {
  emoji: string;
}

// 점심
export interface Food {
  name: string;
  emoji?: string;
}

export interface FoodPrice extends Food {
  price?: number;
}

export interface FoodText extends Food {
  text?: string;
}
