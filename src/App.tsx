import React from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import StudentPage from './pages/Student';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4592af'
    },
  },
});

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div className="p-4">
                <Link to="/student" className="block">
                  <button className="primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Ученик
                  </button>
                </Link>

                <Link to="/teacher" className="block">
                  <button className="primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Учитель
                  </button>
                </Link>
              </div>
            </Route>

            <Route path="/student">
              <StudentPage />
            </Route>

            <Route path="/teacher">
              <TeacherPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
