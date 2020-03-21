import React from 'react';

function ScheduleSubject({ className, name, time, during, grade, home }: ScheduleSubjectProps) {
  return (
    <div className={"tile p-3 rounded text-white" + (" " + className ?? "")}>
      <div className="relative">
        <div className="title text-lg leading-tight">{name}</div>
        <div className="absolute right-0 top-0">{time}</div>
      </div>

      { (home || during || grade) &&
        <div className="h-2" />
      }

      <div className="text-sm leading-relaxed">
        { grade &&
          <>
            <hr color="white" />
            <div>Класс: {grade}</div>
          </>
        }
        { during &&
          <>
            <hr color="white" />
            <div>На уроке: {during}</div>
          </>
        }
        { home &&
          <>
            <hr color="white" />
            <div>Дома: {home}</div>
          </>
        }
      </div>

      { (home || during || grade) &&
        <hr color="white" />
      }
    </div>
  );

}

interface ScheduleSubjectProps {
  className?: string,
  name: string,
  time: string,
  during?: string,
  home?: string,
  grade?: string,
}

export default ScheduleSubject;