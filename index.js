import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Links from './components/Links.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/links" component={Links}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
