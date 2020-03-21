import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import SubjectMarks from '../SubjectMarks';

function TeacherMarks() {
  let [grade, setGrade] = useState('none');
  let [student, setStudent] = useState('none');

  return (
    <div className="p-3">
      <Select
        className="w-full mb-3"
        value={grade}
        onChange={(event) => { setGrade(event.target.value as string); }}
       >
         <MenuItem value='none'>
          <em>Класс</em>
         </MenuItem>

         <MenuItem value="9А">9 "А"</MenuItem>
         <MenuItem value="9Б">9 "Б"</MenuItem>
         <MenuItem value="9В">9 "В"</MenuItem>

         <MenuItem value="10А">10 "А"</MenuItem>
         <MenuItem value="10Б">10 "Б"</MenuItem>
         <MenuItem value="10В">10 "В"</MenuItem>
      </Select>

      <Select
        className="w-full mb-3"
        value={student}
        onChange={(event) => { setStudent(event.target.value as string); }}
       >
         <MenuItem value='none'>
          <em>Ученик</em>
         </MenuItem>
         <MenuItem value="Королёв">Королёв Олег</MenuItem>
         <MenuItem value="Долгих">Долгих Кирилл</MenuItem>
         <MenuItem value="Соболев">Соболев Арсений</MenuItem>
      </Select>

      <SubjectMarks subject="Алгебра" marks={[4, 5, 3]} />

      <div className="h-2" />
    
      <SubjectMarks subject="Русский язык" marks={[5, 4, 4, 4]} />

      <div className="h-2" />

      <SubjectMarks subject="ОБЖ" marks={[3, 4, 4, 5]} />
    </div>
  );
}

export default TeacherMarks;