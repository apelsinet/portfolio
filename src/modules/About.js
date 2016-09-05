import React, {PropTypes} from 'react';
import Coffee from '../components/Coffee';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {coffeeTipVisible: false};
	}

	_openCoffeeTip() {
		this.setState({coffeeTipVisible: true});
	}

	_closeCoffeeTip() {
		this.setState({coffeeTipVisible: false});
	}

	render() {
		const { coffeeTipVisible } = this.state;

		return (
			<div>
			<section>
			<svg xmlns="http://www.w3.org/2000/svg" className="svg-about" onClick={this._openCoffeeTip.bind(this)} viewBox="-55 -45 600 600"><defs><circle id="a" cx="264.5" cy="256" r="256"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><g clipPath="url(#b)"><circle cx="264.5" cy="256" r="256" fill="#ECD078"/></g><path d="M408.6 585.5L221.3 399.7l85.7-132 191.8 185.8" opacity=".2" clipPath="url(#b)"/><path fill="#A4674D" d="M328 367.6h-.2z" clipPath="url(#b)"/><g clipPath="url(#b)"><circle cx="181.5" cy="398.9" r="181.5" fill="#FFF"/><path fill="#FFF" d="M381.3 365.6H366c-18.4 0-33.4 17.6-33.4 39.2s15 39.2 33.3 39.2h15c18 0 33-17.6 33-39.2s-15-39.2-34-39.2zm0 55H366c-7.3 0-13.4-7.3-13.4-15.8s6-15.6 13.3-15.6h15c7 0 13 7 13 15.6s-6 15.7-14 15.7z"/><path fill="#600" d="M181.5 536.6C103.5 536.6 40 473 40 395s63.5-141.4 141.5-141.4S323 317 323 395s-63.5 141.6-141.5 141.6z"/><path fill="#A4674D" d="M181.5 253.6c-33 0-63.6 11.4-87.7 30.5-18.7 43 28 81 68.5 88 20 4 26 30 17 51-12 26-6 60 20 79 16.6 12 36 6 53.8 12 1 0 1-1 1-1 1 1 0 2 0 2l2 .7c-.4 0-1 0-1.2-.3-.3.7-1.3.7-2 .7 1.6.6 3.3 1 5 1.3 40-25 67-69.8 67-120.6 0-78-63.4-141.4-141.4-141.4z" opacity=".7"/></g><path d="M521 374.5L314.7 202.2l106-110L592.3 256" opacity=".2" clipPath="url(#b)"/><path fill="#D99748" d="M454.3 158.5c0-49.2-39.8-89-89-89-49 0-89 39.8-89 89v4.8c5.5 8.5 13.7 15.8 23 21.2 8 5 8 22 21 23 23 3 52-8 58 19 2 7 5.3 13.4 9.6 18 38-10 66-44.7 66-86z" clipPath="url(#b)"/><path fill="#600" d="M310 139.5c-2.5-1-5.4-.7-7.7.7-3.2 2-4.6 6-2.6 9.3l.6.8c-.2 2.4 1.3 4.7 3.7 5.4 2.6.7 5.4 1 8 .8 2.4-.2 4.3-1.4 5-3.7 1.5-5.6-1.7-11.2-7-13.3zm66-40c-3-2-7-1.2-10-.3-2.2.7-3.7 2.6-3.7 5v3c-.8 2.3.2 4.7 2.2 6.2 5.2 3.8 14 1.6 15.7-5 1-3.6-1.2-7-4.2-9zm40.3 73.3c0-2-1.4-4-3.2-4.8 0-.5-1-1-1-1.4-2-1.7-7-.7-8 2 0 1.5-1 2.7 0 4-1 1.4-1 3.6 0 5.4.8 1.4 2 2.5 4 3 1 .2 2 .2 3-.2.6.2 1 .3 1.8.3 2.8 0 5-2 5-5v-3zm-56 15.2c-.5-2.2-2.8-3.3-5-3.6-3-.3-6.2 1.4-8 4-1.4 1-2 2.5-2 4 0 3 2.2 4.6 5 5 2 .2 4.4 0 6.5-1 3-1.8 4-5 3.4-8.3zm81.4-62.3c-.2-1.2-.6-2.3-1.5-3l-2.7-2.8c-3-3-8.5-1-8.5 3v5c0 2 1.5 4 3.6 5 2.7 0 5 0 7.3-1s3-5 1-7z" clipPath="url(#b)"/></svg>
			{coffeeTipVisible
					? <Coffee closeCoffeeTip={this._closeCoffeeTip.bind(this)} />
					: ''
			}
			<h2>I'm fascinated by the web</h2>
      <p>I actually started my developer adventures in the late '90s. My dad printed out this huge stack of pages with a beginner's guide to HTML. I was an amazed ten or eleven year old, and continued learning CSS, some Javascript and PHP over the coming years. I can't really say that my creations were objects of pure beauty though, but these were the days of Geocities and Angelfire after all. During High school, my developer path was unfortunately clouded by an increasing interest in music. I went to Dalarna University to study music production and earned a Bachelor of Arts. My passion for the web never faded though, I just kept it as a hobby. A few years back I decided to learn C++ to get a basic classic programming foundation. I loved it, but started to gravitate to Javascript once I found how much had happened to this language that I used to build alert games with. Fast-forward to this day.</p> 
      <h2>A sound engineer who works with video</h2>
      <p>I'm currently employed as a transmission engineer at a TV-station in Stockholm, Sweden. I sit in a room with something like 20x 50" monitors and watch a load of TV. I've been juggeling this with becoming a father to my lovely&mdash;now 1 year old&mdash;son, and learning and learning, and some times committing code when a spare hour is found, but recently went on paternal leave. This is where I am now.</p>
      <h2>Constantly thinking about stuff</h2>
      <p>I love to read and watch pop science about space, artificial intelligence, philosophy and just general computer science. When I do have time over I enjoy watching a good movie once in a while. I love Tarantino and Nolan stuff and I'm a big Lord of the Rings fan. Yes, I know the Hobbit movies could have been one single thing but I still very much enjoyed them! I also like TV-shows like Game of Thrones, House of Cards, Hannibal, Gomorrah and True Detective. Sherlock is great too, and Cumberbatch's film about Alan Turing as well now that I come to think of it. Enough about movies now.</p>
      <h2>Languages and technologies I use</h2>
      <p>I'm always interested in learning new things, but these are the languages and tools that I currently use:</p>
      <ul>
        <li>JavaScript (ES6)</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Sass/SCSS</li>
        <li>PHP</li>
        <li>C++</li>
        <li>Shell script</li>
        <li>Node.js</li>
        <li>React.js (learning Redux)</li>
        <li>Webpack</li>
        <li>Wordpress</li>
        <li>Git</li>
        <li>Ubuntu</li>
        <li>NGINX</li>
      </ul>
      <p>In the future, I'd like to learn things like Python and Machine Learning, as well as more backend tech.</p>
      <h2>Resume</h2>
      <p>You can read my resume <a href="http://apelsi.net/resume">over here</a> or&mdash;if you rather prefer&mdash;you can <a href="http://apelsi.net/resume/mattias_prada_resume.pdf">download it as PDF.</a></p>

        
			</section>
			</div>
		);
	}
}
