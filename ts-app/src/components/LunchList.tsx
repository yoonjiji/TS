import React from "react";
import { Food, FoodPrice, FoodText } from "@interfaces/common";

type FoodListProps = {
  foodList: (Food | FoodPrice | FoodText)[];
};

const LunchList: React.FC<FoodListProps> = ({ foodList }) => {
  return (
    <div>
      <h2>EmployeeList</h2>
      <ul>
        {foodList.map((food) => (
          <li>
            {food.name},{food.emoji},
            {"price" in food ? food.price : "text" in food ? food.text : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LunchList;
