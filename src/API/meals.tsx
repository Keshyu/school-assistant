import React from 'react';
import MealView from '../containers/MealView';

export function viewMealSchedule({ meals }: MealSchedule) {
  return meals.map(({ type_, afterClass, pieces }) => {
    let [mealPieces, mealCost] = spliteMealPieces(pieces);

    return (
      <>
        <MealView
          mealType={type_}
          afterClass={afterClass}
          pieces={mealPieces}
          cost={mealCost}
        />

        <div className="h-2" />
      </>
    );
  });
}

function spliteMealPieces(pieces: MealPiece[]): [string[], number] {
    let mealPieces: string[] = [];
    let mealCost = 0;

    pieces.forEach(({ name, cost }) => {
      mealPieces.push(name);
      mealCost += cost;
    });

    return [mealPieces, mealCost];
}

export interface MealSchedule {
  meals: Meal[],
}

export interface Meal {
  type_: MealType,
  pieces: MealPiece[],
  afterClass: number,
}

export interface MealPiece {
  name: string,
  cost: number,
}

export type MealType = "breakfast" | "lunch" | "dinner";