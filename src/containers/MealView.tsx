import React from 'react';
import { MealType } from '../API/meals';

function MealView({ className, mealType, afterClass, pieces, cost }: MealProps) {
  return (
    <div className={"tile rounded text-white p-3" + (" " + className ?? "")}>
      <div className="mb-2">
        <div className="title capitalize leading-tight text-lg">
          {inferMeal(mealType)}
        </div>

        <div className="font-bold text-xs2 uppercase">После {afterClass} урока</div>
      </div>

      <hr color="white" />

      <div className="leading-relaxed text-sm flex flex-col">
        <ul className="mb-2">
          {
            pieces.map((piece) => {
              return (
                <>
                  <li>{piece}</li>
                  <hr color="white" />
                </>
              );
            })
          }
        </ul>

        <div className="leading-tight self-end">Стоимость: {cost} руб.</div>
      </div>
    </div>
  );
}

function inferMeal(mealType: MealType) {
  switch(mealType) {
    case "breakfast":
      return "завтрак";
    case "lunch":
      return "обед";
    case "dinner":
      return "ужин";
    default:
      throw new Error();
  }
}

export interface MealProps {
  className?: string,
  mealType: MealType,
  afterClass: number,
  pieces: string[],
  cost: number,
}


export default MealView;