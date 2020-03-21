import React from 'react';
import Header from '../containers/Header';
import NavigationBar from '../containers/BottomNavigation';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Events from './Events';
import TeacherMarks from '../containers/teacher/TeacherMarks';
import Meals from './Meals';
import mealSchedule from '../store/meals';
import TeacherSchedule from '../containers/teacher/TeacherSchedule';

function TeacherPage() {
  let match = useRouteMatch();

  return (
    <>
      <Header name="Радионова Елизаветта Александровна" organization="МАОУ СОШ №12" />

      <div>
        <Switch>
          <Route exact path={`${match.url}/`}>
            <TeacherSchedule />
          </Route>

          <Route path={`${match.url}/marks`}>
            <TeacherMarks />
          </Route>

          <Route path={`${match.url}/meals`}>
            <Meals balance={3000} mealSchedule={mealSchedule} />
          </Route>

          <Route path={`${match.url}/events`}>
            <Events />
          </Route>
        </Switch>
      </div>

      <NavigationBar route="/teacher" />
    </>
  );
}

export default TeacherPage;