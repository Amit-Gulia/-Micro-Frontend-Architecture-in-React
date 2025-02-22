import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Chat from './Components/Chat';
import Email from './Components/Email';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/email" component={Email} />
    </Switch>
  </Router>
);

export default Routes;
