import React from 'react';
import { Link, IndexLink } from 'react-router';

let Menu = require('react-burger-menu').bubble;
let isMenuOpen = function(state) {
  if (state.isOpen == true) {
    document.body.style.overflow = "hidden";
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      document.body.style.position = "fixed"; // fix for mobile devices that don't handle body overflow correct
      document.body.style.width = "100%";
    }
    document.getElementById("wrapper").style.overflowY = "scroll"; // replace missing scrollbar with new one that's locked
  }
  else {
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.getElementById("wrapper").style.overflowY = "hidden";
  }
  return state.isOpen;
};

export default class Burgermenu extends React.Component {
  render() {
    return (
      <Menu onStateChange={isMenuOpen} width={280} isOpen={false}>
        <ul role="nav">
          <IndexLink to="/" activeStyle={{ color: '#222' }}><li className="menu-item">Home</li></IndexLink>
          <Link to="/about" activeStyle={{ color: '#222' }}><li className="menu-item">About</li></Link>
          <Link to="/blog" activeStyle={{ color: '#222' }}><li className="menu-item">Blog</li></Link>
          <Link to="/contact" activeStyle={{ color: '#222' }}><li className="menu-item">Contact</li></Link>
        </ul>
      </Menu>
    );
  }
}
