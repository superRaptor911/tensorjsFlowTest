import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ROUTES} from './Routes';

function genRoutes() {
  let jsx = [];
  for (const i in ROUTES) {
    const item = ROUTES[i];
    jsx.push({path: item.path, component: item.component});
  }
  return jsx;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {genRoutes().map((item, id) => (
            <Route exact path={item.path} key={id}>
              <item.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
