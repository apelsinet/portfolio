import React from 'react';
import Contactform from '../components/Contactform';
import Coffee from '../components/Coffee';

export default class Home extends React.Component {
	render() {
		return (
			<div>
			<section>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -45 600 600" className="svg-computer"><circle cx="317.2" cy="256" r="256" fill="#ECD078" /><path fill="#D19B65" d="M479.4 453.7L157 455.9l-27.7-26.5h377.2"/><path fill="#C02942" d="M61.2 255.6s1.2 105.6 68 173.8h376c42.2-45.6 68-106.7 68-173.8 0-34-6.6-66.4-18.6-96.1l-390.1-13.2c-29 30.6-103.3 109.3-103.3 109.3z"/><path fill="#231F20" d="M413.3 335.6l-274.6 87.9 8.7 6.9h356.8c17.9-17.1 26.1-33.4 26.1-33.4l-117-61.4z" opacity=".08"/><path fill="#FFF" d="M494.3 162.9c-13.5 0-24.4 10.9-24.4 24.4 0 13.5 10.9 24.4 24.4 24.4s24.4-10.9 24.4-24.4c0-13.5-10.9-24.4-24.4-24.4zm-2 42.3c-9.7 0-17.6-7.9-17.6-17.6 0-9.7 7.9-17.6 17.6-17.6s17.6 7.9 17.6 17.6c0 9.7-7.9 17.6-17.6 17.6z"/><path fill="none" d="M474.7 187.6c0 8.8 6.4 16 14.8 17.3l3.7-34.9h-.9c-9.7 0-17.6 7.9-17.6 17.6zm17.6 17.6c9.7 0 17.6-7.9 17.6-17.6 0-9.4-7.4-17-16.6-17.5l-3.7 34.9c.9.1 1.8.2 2.7.2z"/><path fill="#231F20" d="M474.7 187.6c0-9.7 7.9-17.6 17.6-17.6h.9l.8-7.2c-13.4.2-24.1 11-24.1 24.4 0 11.6 8.1 21.3 19 23.8l.7-6.1c-8.4-1.3-14.9-8.5-14.9-17.3z" opacity=".14"/><path fill="#231F20" d="M476.9 264.6l90.4 46.2s-6 54.1-44.5 97.7L394.1 266.1l82.8-1.5z" opacity=".08"/><path fill="#1A1A1A" d="M309.3 242.2v-158c0-9.8-8.4-17.4-18.1-16.6l-276 24.5C6.1 92.9-.7 100.9.1 110l15.1 184.3 294.1-52.1z"/><path fill="#BCBCBC" d="M422.7 326.4c1.2-2.1-.8 3.1-1.3 5.8-.6 3.5-3.1 6.3-6.5 7.4l-274.1 85v-10.9l281.9-87.3z"/><path fill="#F8F8F8" d="M324.8 362.6l-48.6 15.5m0 .9h.3l48.6-15.5c.5-.2.8-.7.6-1.2-.2-.5-.7-.8-1.2-.6l-48.6 15.5c-.5.2-.8.7-.6 1.2.1.4.5.6.9.6z"/><path fill="#D6D5D4" d="M419.1 330.5l-273.9 83.3c-3 .9-6.3.1-8.6-2.1l-120.1-117L310.7 243l110.6 71.9c6.2 4.1 4.8 13.5-2.2 15.6z"/><path fill="#BCBCBC" d="M140.8 413.6l-126-119.3v10.4c0 1.8.8 3.5 2.1 4.8l123.9 115v-10.9z"/><path fill="#232322" d="M292.1 237.4V89.7L24.2 118.1l10.4 166.7"/><path fill="#B3B3B3" d="M325.6 339.4l-18.9-15c-1.6-1.3-3.6-1.7-5.6-1.2l-70.9 18.2c-4.9 1.3-6.5 7.4-2.8 10.9l19.1 18.1c1.7 1.6 4.1 2.1 6.3 1.5l70.6-21.3c5-1.6 6.3-8 2.2-11.2zm-126.6-36l21.3-4.6 5.2 7-21.3 4.6m40.8-16.9l18.5-4 6.1 6.6-19 4.2m-27.2-2.2l18.5-4 5.6 6.8-18.9 4.2m45.6-30.6l-17.2 3.7-5.9-6.4 16.4-3.5m5.3 27.1l-6.1-6.6 18.6-4.1 6.9 6.4m-38.4-12.2l-17.6 3.8-5.4-6.5 17.1-3.7m-82 28.4l4.4 5.8-18.4 4-4.4-5.9m30.2-25.3l3.3 4.4-20.9 4.5-4-5.3 21.3-4.2m-18.5 12.6l5.1 6.9-18.4 3.9-5.1-6.8m92.6-12.1l-17.8 3.9-5.1-6.7 17.5-3.8m-73.9 36.4l18.3-4 5.4 7.1-18.3 4m16-11.8l20.7-4.4 5.3 7-20.7 4.5m121-37.3l-15.4 3.4-6-5.6 14.8-3.2m-35.7 7.8l17.5-3.8 6 5.5-18.2 3.9m-47.4 3.5l18-3.9 4.7 5.8-18.3 3.9m-110.9 3.3l-5.1-5.8 25.6-5 .6.5 3.8 5m18-9.2l3.5 4.6-18.4 4-4.2-5.6 18.8-3.7m15.7 16.5l20.8-4.5 4.4 5.9-20.8 4.4m87.9-19l-18.2 4-4.8-5.8 17.8-3.8m-43.8 6.5l-21.3 4.6-5-6.7 21.3-4.6m-24.3 5.2l5 6.8-20.8 4.5-5.2-6.8m30.9 4.1l21.3-4.6 4.3 5.9-21.3 4.6m88.4-39.3l-4-3.3 13.1-2.6 4.3 3m-131.7 73.6l-7.1-9.5 18.3-4 7 9.3m-27.4-4.6l7.2 9.5-20.1 4.9-.4-.7-8-9m14-14.4l5.4 7.2-21.6 4.7-6.3-7m74.1-44.1l3 4.1-21.2 4.5-3.7-4.9L202 274m-57.5 31.5l4.4 5.8-22.8 5-5.1-5.7m12.5 18.3l8.6 9.7-19.7 4.6-10.7-9.2c.1-.3 21.8-5.1 21.8-5.1zm-13-13.8l10.8 11.3-22.2 5.1-10.5-8.9m2.3 2.1"/><path fill="#B3B3B3" d="M117.8 311.3l5.1 5.7-24.3 5.6-6.7-5.7m8 8.3h1.1-1.1zm225.8-30.9l-7.4-6 16.5-4.2 9.8 6.7-18.4 4.3M89 314.4l-7.4-6.4 28-5.9 6 6.7-25.5 5.6M72 299.8l30.3-6 .5.6 4.6 5.2-27.9 6.2m57.9-9.7l5.2 6.9-23.8 5.1-6-6.7m75.4 26l-6.7-9.3 90.3-19.6 7.2 7.8-19.8 4.6m2.5-47.8l3.2 2.9-16 3.4-3.6-3.9 15.9-3.2m16.6-3.7l4.1 3.7-13.6 2.9-3.9-3.5m13.2 12.1l-6.7-6.2 13.9-3 7.3 6m-69.5.1l3 3.7-17.2 3.6-3.4-4.5 17.1-3.4m20.5-3.3l3 3.3-16.8 3.6-3.5-4.3 17-3.3m90.2 16.2l-17 3.7-7.6-6.1 14.6-3.2m-17 23.3l-1.2-1.6-6.1-5.7 16.5-3.6 8.3 6.8m-28.2-2.4l7.6 7-20.5 5.1-.4-.6-6.6-7.1 19.9-4.4zm15.5-26.8l-14.6 3.2-7.4-6 13.2-3.3M288.7 284l15.7-3.4 7.5 6.2-16.3 3.6m25.3-16.3l-15.8 3.5-6.6-5.4 13.4-3.9"/><path fill="#FFF" d="M470.5 268.3h-71c-3.7 0-6.8-2.7-7.3-6.3l-17.1-115.4h117l-14.2 115.3c-.5 3.6-3.6 6.4-7.4 6.4z"/><path fill="#E2E0E0" d="M375.1 146.6s52-21.6 117 0c0 0-56 20.8-117 0z"/><path fill="#520" d="M393.1 151.6s41.1-15.6 79.4.2c-.1 0-36.4 9.9-79.4-.2z"/></svg>
			<Coffee/>
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
