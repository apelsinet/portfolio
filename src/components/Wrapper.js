import React, {PropTypes} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <header><Header /></header>
      <main><Main /></main>
      <footer><Footer /></footer>
    </div>
  );
};

export default Wrapper;
