import React from 'react';
import ScheduleSubject from '../ScheduleSubject';

function TeacherSchedule() {
  return (
    <div className="p-3">
      <div className="mb-1 text-xl">
        Расписание на завтра
      </div>

      <hr className="mb-4" />

      <ScheduleSubject time="8:15" name='9 "Б"' during="Самостоятельная" />

      <div className="h-2" />

      <ScheduleSubject time="9:15" name='10 "А"' home="№2, 3, 4" />

      <div className="h-2" />

      <ScheduleSubject time="10:15" name='7 "Б"' />
    </div>
  );
}

export default TeacherSchedule;