import React from 'react';
import { MarksForSubject, viewSubjectMarks } from '../API/marks';

function Marks({ subjects }: MarksProps) {
  return (
    <div className="p-3">
      <div className="mb-1 text-xl">
        Оценки за текущую четверть
      </div>

      <hr className="mb-4" />

      {viewSubjectMarks(subjects)}
    </div>
  );
}

export interface MarksProps {
  subjects: MarksForSubject[],
}

export default Marks;