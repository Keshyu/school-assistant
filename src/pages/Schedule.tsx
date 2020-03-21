import React from 'react';
import { ScheduleDescription } from '../API/schedule';

import { viewSchedule } from '../API/schedule';

function Schedule({ schedule }: ScheduleProps) {
  return (
    <div className="p-3">
      <div className="mb-1 text-xl">
        Расписание на завтра
      </div>

      <hr className="mb-4" />

      {viewSchedule(schedule)}

    </div>
  );
}

export interface ScheduleProps {
  schedule: ScheduleDescription,
}

export default Schedule;