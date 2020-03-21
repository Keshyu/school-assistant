import React from 'react';
import { MealSchedule, viewMealSchedule } from '../API/meals';

function Meals({ balance, mealSchedule }: MealsProps) {
  return (
    <div className="p-3">
      <div className="tile flex flex-row relative rounded text-white p-3 text-lg mb-3">
        <div className="title">
          Баланс
        </div>

        <div className="w-auto flex-1" />

        <div>
          {balance} руб.
        </div>
      </div>

      {viewMealSchedule(mealSchedule)}
    </div>
  );
}

export interface MealsProps {
  balance: number,
  mealSchedule: MealSchedule,
}

export default Meals;