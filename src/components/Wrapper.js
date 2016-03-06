import React, {PropTypes} from 'react';
import Burgermenu from './Burgermenu';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <Burgermenu />
      <header><Header /></header>
      <main><Main /></main>
      <footer><Footer /></footer>
    </div>
  );
};

export default Wrapper;
