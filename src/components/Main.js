import React, {PropTypes} from 'react';
let ReactMarkdown = require('react-markdown');
let hljs = require('highlight.js');
hljs.initHighlightingOnLoad();

let input = [
  '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
  '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
  'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
  '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
  '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
  'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
  '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
  '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
  'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
  'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
  '---------------\n\n',
  'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal\n\n',
  '```html\n',
  '<html>\n',
  '  <head>\n',
  '    <title></title>\n',
  '    <link rel="stylesheet" href="somedomain.com/style.css"/>\n',
  '  </head>\n',
  '</html>\n',
  '```\n',
  'Some c++\n',
  '```c++\n',
  '#include <iostream>\n',
  'int main() {\n',
  '  std::cout << "Hellow World!";\n',
  '  //commented text goes here\n',
  '}\n',
  '```\n'
].join('');

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
      <section>
        <ReactMarkdown source={input} />
      </section>
    </div>
  );
};

export default Main;
