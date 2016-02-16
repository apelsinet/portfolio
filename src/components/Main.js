import React, {PropTypes} from 'react';

const Main = (props) => {
  return (
    <div>
      <section>
        <h1>Heading</h1>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote>
          <p>“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”</p>
          <cite>—Albert Einstein</cite>
        </blockquote>
      </section>
      <section>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <pre><code>
        // this is a "comment"
        </code></pre>
      </section>
      <section>
        <h4>Heading</h4>
        <p></p>
      </section>
    </div>
  );
};

export default Main;
