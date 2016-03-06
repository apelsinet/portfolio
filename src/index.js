import React from 'react';
import {render} from 'react-dom';
import './styles/styles.scss';
import Burgermenu from './components/Burgermenu';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

render(
  <div id="wrapper">
    <Burgermenu />
    <Header />
    <Main />
    <Footer />
  </div>, document.getElementById('app')
);
