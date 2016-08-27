import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Links from './components/Links';
import UserFetcher from './components/UserFetcher';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/links" component={Links}/>
    <Route path="/about" component={About}/>
    <Route path="/users" component={UserFetcher}/>
  </Router>
), document.getElementById('app'));
