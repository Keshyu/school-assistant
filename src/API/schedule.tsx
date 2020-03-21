import React from 'react';
import Subject from '../containers/ScheduleSubject';
import { zipWith } from 'lodash';


export function viewSchedule({ subjects, timeSchedule }: ScheduleDescription) {
  if(subjects.length > timeSchedule.length)
    throw new Error("Not enough time stamps for all subjects");

  let subjectsWithTime = zipWith<SubjectDescription, string, [SubjectDescription, string]>(
    subjects,
    timeSchedule,

    function(subject: SubjectDescription, time: string): [SubjectDescription, string] {
      return [subject, time];
    },
  );

  return (
    <div className="overflow-scroll">
      {
        subjectsWithTime.map(([{ name, during, home }, time]) => {
          return (
            <>
              <Subject name={name} during={during} home={home} time={time} />
              <div className="h-2" />
            </>
          );
        })
      }
    </div>
  );
}

export interface ScheduleDescription {
  subjects: SubjectDescription[],
  timeSchedule: TimeSchedule,
}

export interface SubjectDescription {
  name: string,
  during?: string,
  home?: string,
}

export type TimeSchedule = string[];