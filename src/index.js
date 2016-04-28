import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './modules/Home';
import About from './modules/About';
import Blog from './modules/Blog';
import Contact from './modules/Contact';
import './styles/styles.scss';


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
, document.getElementById('app')
);
