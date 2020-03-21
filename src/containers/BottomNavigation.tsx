import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import EventIcon from '@material-ui/icons/Event';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import GradeIcon from '@material-ui/icons/Grade';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { useHistory } from 'react-router-dom';


interface BottomNavigationProps {
  route?: string,
}

function NavigationBar({ route: route1 }: BottomNavigationProps) {
  let route = route1 || "";

  const [page, setPage] = useState(0);
  let history = useHistory();

  function switchPage(page: number) {
    switch (page) {
      case 0:
        history.push(`${route}/`);
        break;
      case 1:
        history.push(`${route}/marks`);
        break;
      case 2:
        history.push(`${route}/meals`);
        break;
      case 3:
        history.push(`${route}/events`);
        break;
    };
  }

  return (
    <BottomNavigation
      className="absolute bottom-0 w-full"

      value={page}
      onChange={(_, newPage) => {
        setPage(newPage);
        switchPage(newPage);
      }}

      showLabels
    >
      <BottomNavigationAction label="Распиcание" icon={<AssignmentIcon />} />

      <BottomNavigationAction label="Оценки" icon={<GradeIcon />} />

      <BottomNavigationAction label="Питание" icon={<FastfoodIcon />} />

      <BottomNavigationAction label="Мероприятия" icon={<EventIcon />} />
    </BottomNavigation>
  );
}

export default NavigationBar;
