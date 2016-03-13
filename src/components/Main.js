import React, {PropTypes} from 'react';


const Main = (props) => {
  return (
    <main>
      <section>
        <object className="svg-computer" data={require('../assets/computer_compressed.svg')} type="image/svg+xml">
        </object>
        <h2>The ever expanding and accelerating web needs focus on performance</h2>
        <p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
        <pre><code className="css">{`body { color: blue; }`}</code></pre>
        <p>Add a touch of html.</p>
        <pre><code className="html">{`<html>
  <head>
    <title></title>
    <link rel='stylesheet' href='somedomain.com/style.css'/>
  </head>
</html>`}</code></pre>
        <p>Here comes the javascript</p>
        <pre><code className="javascript">{`var React = require('react');
var Markdown = require('react-markdown');

React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);`}</code></pre>
        <p>Finally, onwards with some c++</p>
        <pre><code className="c++">{`#include <iostream>
int main() {
  std::cout << "Hellow World!";
  //commented text goes here
}`}</code></pre>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote>
        “Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”
        </blockquote>
        <cite>—Albert Einstein</cite>
      </section>
      <section>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      <section>
        <h4>Heading</h4>
        <p>Some text...</p>
      </section>
    </main>
  );
};

export default Main;
