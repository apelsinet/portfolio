import React from 'react';
import Contactform from '../components/Contactform';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section>
          <object className="svg-computer" data={require('../assets/computer_compressed.svg')} type="image/svg+xml">
          </object>
          <h2>The ever expanding and accelerating web needs focus on performance</h2>
          <p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> <a href="http://dffgjghjhg.com">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <figure>
            <img src={require('../assets/coffeedrinker_compressed.jpg')} />
            <figcaption>Sipping on a cup of delicious black gold.</figcaption>
          </figure>
          <p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li>list item 1.</li>
            <li>list item 2.</li>
            <li>list item 3.</li>
            <li>list item 4.</li>
          </ul>
        </section>
        <section>
          <h2>Heading</h2>
          <p>Now to some code snippets. Let's start with the css.</p>
          <pre><code className="language-css">{`body { color: blue !important; }`}</code></pre>
          <p>Add a touch of html.</p>
          <pre><code className="language-markup">{`<html>
  <head>
    <title></title>
    <link rel='stylesheet' href='somedomain.com/style.css'/>
  </head>
</html>`}</code></pre>
          <p>Here comes the javascript</p>
          <pre><code className="language-javascript">{`var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);`}</code></pre>
        <p>Finally, onwards with some c++</p>
        <pre><code className="language-cpp">{`#include <iostream>
int main() {
  std::cout << "Hellow World!";
  //commented text goes here
}`}</code></pre>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <blockquote>
          “Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”
          <cite>—Albert Einstein</cite>
          </blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section>
          <h3>Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Contactform />
        </section>
        <section>
          <h4>Heading</h4>
          <p>Some text...</p>
        </section>
      </div>
    );
  }
}
