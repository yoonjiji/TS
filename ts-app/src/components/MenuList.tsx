import React from "react";
import { Menu, MenuPrice, MenuSource } from "@interfaces/common";
// 1. props의 타입을 체크!! : property와 데이터타입 동일!! - interface
// interface MenuListProps {
//   menus: {
//     name: string;
//     emoji: string;
//     price?: number;
//     source?: string;
//   }[];
// }

// 2. props 타입을 체크!! : interface + type
// 재사용성 측면에선 얘가 좋다고 함
// interface Menu {
//   name: string;
//   emoji: string;
//   price?: number;
//   source?: string;
// }
// type MenuListProps = {
//   menus: Menu[];
// };

// 3. props 타입을 체크!! : interface(부모, 자식 관계도출) + type
// 코드 반복 줄이고 좀 더 객체지향적
// interface Menu {
//   // 메뉴는 필수항목만
//   name: string;
//   emoji: string;
// }

// interface MenuPrice extends Menu {
//   price?: number;
// }

// interface MenuSource extends Menu {
//   source?: string;
// }

// 4. interface 또는 typeAlias를 별도로 저장후 import해서 사용함
// tsconfig.json 파일에 저장된 파일을 경로를 path와 별칭으로 추가한 후 import
/*
    이거 넣어주면 된다(tsconfig.json)
    "baseUrl": "src",
    "paths": {
      "@interfaces/*": ["interfaces/*"]
    }
*/
type MenuListProps = {
  menus: (Menu | MenuPrice | MenuSource)[];
};

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  return (
    <div>
      <h2>MenuList</h2>
      <ul>
        {menus.map((menu) => (
          <li>
            {menu.name},{menu.emoji},
            {/* {"price" in menu && menu.price}
            {"source" in menu && menu.source} */}
            {"price" in menu ? menu.price : "source" in menu ? menu.source : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
