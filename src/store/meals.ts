import { MealSchedule } from "../API/meals";

let meals: MealSchedule = {
  meals: [
    {
      type_: "breakfast",
      afterClass: 1,
      pieces: [
        {
          name: "Каша",
          cost: 20,
        },
        {
          name: "Бутерброд с сыром",
          cost: 8.3,
        },
        {
          name: "Чай с аскорбинкой",
          cost: 9.3,
        },
      ],
    },
    {
      type_: "lunch",
      afterClass: 4,
      pieces: [
        {
          name: "Гороховый суп",
          cost: 60,
        },
        {
          name: "Капустный салат",
          cost: 44,
        },
        {
          name: "Компот",
          cost: 10.5,
        },
      ],
    },
  ],
};

export default meals;