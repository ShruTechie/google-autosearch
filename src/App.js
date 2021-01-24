import React from 'react';
import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './Search'
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route exact path='/search'>
            <Search />
          </Route>

          <Route path='/' >
            <Home />
          </Route>
        </Switch>


      </Router>

    </div>
  );
}

export default App;
