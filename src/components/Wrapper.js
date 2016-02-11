import React, {PropTypes} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Wrapper = (props) => {
  return (
    <div className="wrapper">
      <header className="header"><Header /></header>
      <main className="main"><Main /></main>
      <footer className="footer"><Footer /></footer>
    </div>
  );
};

export default Wrapper;
