import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from '../containers/Header';
import Schedule from './Schedule';
import schedule from '../store/schedule';
import marks from '../store/marks';
import mealSchedule from '../store/meals';
import Marks from './Marks';
import Meals from './Meals';
import Events from './Events';
import NavigationBar from '../containers/BottomNavigation';

function StudentPage() {
  let match = useRouteMatch();

  return (
    <>
      <Header name="Королёв Олег Михайлович" organization="МАОУ СОШ №12" />

      <Switch>
        <Route exact path={`${match.url}/`}>
          <Schedule schedule={schedule} />
        </Route>

        <Route path={`${match.url}/marks`}>
          <Marks subjects={marks} />
        </Route>

        <Route path={`${match.url}/meals`}>
          <Meals balance={1500} mealSchedule={mealSchedule} />
        </Route>

        <Route path={`${match.url}/events`}>
          <Events />
        </Route>
      </Switch>

      <NavigationBar route="/student" />
    </>
  );
}

export default StudentPage;