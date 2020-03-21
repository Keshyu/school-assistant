import React from 'react';
import SubjectMarks from '../containers/SubjectMarks';

export function viewSubjectMarks(subjects: MarksForSubject[]) {
  return subjects.map(({ subject, marks }) => {
    return (
      <>
        <SubjectMarks subject={subject} marks={marks} />
        <div className="h-2" />
      </>
    );
  });
}

export interface MarksForSubject {
  subject: string,
  marks: number[],
}
