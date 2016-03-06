import React from 'react';
import {render} from 'react-dom';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import Burgermenu from './components/Burgermenu';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

render(
  <div id="wrapper">
    <Burgermenu />
    <header><Header /></header>
    <main><Main /></main>
    <footer><Footer /></footer>
  </div>, document.getElementById('app')
);
