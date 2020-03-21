import React from 'react';
import { avg } from '../utils/math';

function SubjectMarks({ className, subject, marks } : SubjectMarksProps) {
  return (
      <div className={"tile rounded text-white p-3" + (" " + className ?? "")}>
        <div className="title leading-tight mb-2 capitalize leading-tight text-lg">
          {subject}
        </div>

        <hr color="white" />
        
        <div className="leading-relaxed text-sm">
          <div>
            Средний балл: {avg(marks).toFixed(2)}
          </div>

          <hr color="white" />

          <div>
            Все оценки: {marks.join(', ')}
          </div>

          <hr color="white" />
        </div>
      </div>
  );
}

export interface SubjectMarksProps {
  className?: string,
  subject: string,
  marks: number[],
}

export default SubjectMarks;