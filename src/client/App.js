import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Register } from './authentication/Register';
import { Login } from './authentication/Login';


const App = () => (
  <Router>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Router>
);


export default App;
