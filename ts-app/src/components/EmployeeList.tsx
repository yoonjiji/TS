import React from "react";
import { Employee, EmployeeEmoji } from "@interfaces/common";

// 1
// interface EmployeeListProps {
//   employees: {
//     name: string;
//     age: number;
//     department?: string;
//     emoji?: string;
//   }[];
// }

// 2
// interface Employee {
//   name: string;
//   age: number;
//   department?: string;
//   emoji?: string;
// }
// type EmployeeListProps = {
//   employees: Employee[];
// };

// 3
// interface Employee {
//   name: string;
//   age: number;
//   department: string;
// }

// interface EmployeeEmoji extends Employee {
//   emoji: string;
// }

type EmployeeListProps = {
  employees: (Employee | EmployeeEmoji)[];
};

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div>
      <h2>EmployeeList</h2>
      <ul>
        {employees.map((employee) => (
          <li>
            {employee.name},{employee.age},
            {"emoji" in employee
              ? employee.emoji
              : "department" in employee
              ? employee.department
              : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
