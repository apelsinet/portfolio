import React, {PropTypes} from 'react';
let Menu = require('react-burger-menu').bubble;
let isMenuOpen = function(state) {
  if (state.isOpen == true) {
    document.body.style.overflowY = "hidden";
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.body.style.position = "fixed";
    }
    document.getElementById("wrapper").style.overflowY = "scroll";
  }
  else {
    document.body.style.overflowY = "auto";
    document.body.style.position = "static";
    document.getElementById("wrapper").style.overflowY = "hidden";
  }
  return state.isOpen;
};

const Burgermenu = (props) => {
  return (
    <Menu onStateChange={isMenuOpen} width={280}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a className="menu-item--small" href="">Settings</a>
    </Menu>
  );
};

export default Burgermenu;
