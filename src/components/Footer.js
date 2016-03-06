import React, {PropTypes} from 'react';

const Footer = (props) => {
  return (
    <footer>
      <a href="https://github.com/apelsinet/">
        <svg xmlns="http://www.w3.org/2000/svg" className="github" width="32" height="32" viewBox="0 0 32 32">
          <path fill-rule="evenodd" d="M16 .4C7.2.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5C23.1 6.6 24.4 7 24.4 7c.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z" clip-rule="evenodd"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/mattias.prada">
        <svg xmlns="http://www.w3.org/2000/svg" className="facebook" width="32" height="32" viewBox="0 0 32 32">
          <path d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4H17V20h-4v-5h4v-4c0-4.1 2.6-6.2 6.3-6.2 1.8 0 3.3.2 3.7.2v4.3h-2.6c-2 0-2.5 1-2.5 2.4V15h5l-1 5h-4l.1 12h8.6c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/apelsinet/">
        <svg xmlns="http://www.w3.org/2000/svg" className="instagram" width="32" height="32" viewBox="0 0 32 32">
          <path d="M28.2 0H3.8C1.7 0 0 1.7 0 3.8v24.4C0 30.3 1.7 32 3.8 32h24.4c2.1 0 3.8-1.7 3.8-3.8V3.8C32 1.7 30.3 0 28.2 0zM24 4h3c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm-8 5.9c3.4 0 6.2 2.7 6.2 6.1 0 3.4-2.8 6.1-6.2 6.1-3.4 0-6.2-2.7-6.2-6.1.1-3.4 2.8-6.1 6.2-6.1zM28 29H4c-.6 0-1-.4-1-1V13h4c-.5.8-.7 2.1-.7 3 0 5.4 4.4 9.7 9.7 9.7 5.4 0 9.7-4.4 9.7-9.7 0-.9-.1-2.3-.8-3h4v15c.1.6-.3 1-.9 1z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/mattias-prada-2aa2a743">
        <svg xmlns="http://www.w3.org/2000/svg" className="linkedin" width="32" height="32" viewBox="0 0 32 32">
          <path d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4h29.3c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0zM9.5 27.3H4.7V12h4.8v15.3zM7.1 9.9c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8zm20.2 17.4h-4.7v-7.4c0-1.8 0-4-2.5-4s-2.8 1.9-2.8 3.9v7.6h-4.7V12H17v2.1h.1c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.3v8.4z"/>
        </svg>
      </a>
      <a href="https://twitter.com/apelsinet">
        <svg xmlns="http://www.w3.org/2000/svg" className="twitter" width="32" height="32" viewBox="0 0 32 32">
          <path d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z"/>
        </svg>
      </a>
      <a href="https://www.youtube.com/user/Atbr">
        <svg xmlns="http://www.w3.org/2000/svg" className="youtube" width="32" height="32" viewBox="0 0 32 32">
          <path d="M31.7 9.6s-.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4-4.5-.3-11.2-.3-11.2-.3s-6.7 0-11.2.3c-.6.1-2 .1-3.2 1.4C.6 7.4.3 9.6.3 9.6S0 12.2 0 14.8v2.4c0 2.6.3 5.2.3 5.2s.3 2.2 1.3 3.2c1.2 1.3 2.8 1.2 3.5 1.4 2.6.2 10.9.3 10.9.3s6.7 0 11.2-.3c.6-.1 2-.1 3.2-1.4 1-1 1.3-3.2 1.3-3.2s.3-2.6.3-5.2v-2.4c0-2.6-.3-5.2-.3-5.2zm-19 10.6v-9l8.6 4.5-8.6 4.5z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
