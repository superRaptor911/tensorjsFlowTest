import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LinearRegression from './pages/LinearRegression';
import TfProfile from './pages/TfProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LinearRegression />
          </Route>

          <Route exact path="/tfprofile">
            <TfProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
