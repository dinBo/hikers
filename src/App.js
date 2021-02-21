import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Actions from './pages/actions/actions.component';
import Calendar from './pages/calendar/calendar.component';
import LoginSignup from './pages/login-signup/login-signup.component';
import Navbar from './components/navbar/navbar.component';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/actions">
        <Actions />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
      <Route path="/login-signup">
        <LoginSignup />
      </Route>
    </div>
  );
}

export default App;
