import { ScheduleDescription } from "../API/schedule"

const schedule: ScheduleDescription = {
  subjects: [
    {
      name: "Математика",
      during: "Контрольная работа",
      home: "№256, 257(а, б), 258",
    },
    {
      name: "Русский язык",
      home: "упр. 24-26",
    },
    {
      name: "Английский язык",
      during: "Аудирование",
    },
    {
      name: "ОБЖ",
      during: "Тест",
    },
    {
      name: "Русский язык",
      during: "Контрольное изложение",
    },
    // {
    //   name: "Физкультура",
    // },
    // {
    //   name: "ЫВАЭ",
    // },
  ],

  timeSchedule: [
    '8:15',
    '9:15',
    '10:15',
    '11:20',
    '12:25',
    // '13:20',
    // '14:15',
  ],
};

export default schedule;