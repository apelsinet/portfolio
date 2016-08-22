import React, {PropTypes} from 'react';
import Coffee from '../components/Coffee';

export default class Blog extends React.Component {
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
			<svg xmlns="http://www.w3.org/2000/svg" className="svg-blog" onClick={this._openCoffeeTip.bind(this)} viewBox="-60 0 600 600"><circle cx="256" cy="304.1" r="256" fill="#C02942"/><path fill="#D2D3D1" d="M420.6 500.2L94.2 502l-11.4-11-16.4-15.7 379.5.5-11 11.2c0 .4-.4.5-.6.6l-14.2 12.7z"/><path fill="#EFEFEF" d="M.3 301.6s-7.8 94 65.3 173.8l380.2.5C484 439 513 368.3 513 301.2c0-34-6.6-66.4-18.6-96l-391.4-13C73.7 222.7.2 301.5.2 301.5z"/><path fill="#231F20" d="M277.7 442.2L97 392.5l42-20.7" opacity=".2"/><path fill="#FFF" d="M81 372.7L341 281l196 56.6L288.6 446"/><path fill="#231F20" d="M122.7 299.7L21 279.4 69.4 227l124.4 68m-90.6-112l1.7 9.8 96.3 1.8 2-17.5" opacity=".2"/><path fill="#C0D7A1" d="M93.2 135l26 156c.8 5 4.7 9 9.6 9.8l20.8 3.8c11.7 2 23.8 1.3 35-2.4l19.6-6.4c4.6-1.5 7.8-5.6 8.2-10.4l13.2-160L93.2 135z"/><path fill="#231F20" d="M96 148.7l2.7 19.3 124-1 2-30.2" opacity=".2"/><path fill="#542437" d="M79.8 105.5l6 47.2 148.3-5.4 10-53.8"/><ellipse cx="163.6" cy="210.4" fill="#FFF" rx="26.1" ry="26.6"/><path fill="#D1D3D4" d="M204.6 345.6L324 391l-1.8 4.7-119.4-45.4zm25-12L349 379l-1.8 4.7-119.4-45.4zm74.4 1l78 31.5-1.7 5-78.3-31.4z"/><path fill="#E1574C" d="M338 130.4c-1 4 1.7 8.2 5.8 9l5.5 1.3c4 1 8.2-1.7 9-5.8l2.3-10.5c1-4-1.7-8.2-5.8-9l-5.5-1.3c-4-1-8.2 1.7-9 5.8l-2.3 10z"/><path fill="#FBF1CE" d="M319 324.5l-16 13.2-9.2-19 5.4-24.4 25.6 5.7"/><path fill="#ECD078" d="M336.3 126l25.5 5.7-42.5 192-25.5-5.7z"/><path fill="#314F5A" d="M336.3 126l25.5 5.8-1.6 6.8-25.4-5.6z"/><path fill="#FFF" d="M303 337l-9.4-18.2L336.3 126l13.2 3" opacity=".3"/><path fill="#314F5A" d="M302.8 337.7l6-4.8-9.4-2.5"/>
			<path fill="#D19B65" d="M155.5 3.5c5.4 3.7 8.2 10 10.2 16.3 2.3 7 4 14.2 3.4 21.5-1 15-11 27.4-20 39.2-4 4.8-8 11-5.6 16.7-9.6-6.5-14-20-10-30.8 2.6-7 8-12.6 11.8-19 5-8 7-17.8 5-27S141 3.2 132 1c8.2-1.3 17-2 24 2.4zm18.3 51.2c-3.4 7-8.7 13-11.6 20.3-3 7.2-3 16.6 2.8 21.7 0-3 2-6 4.5-7.6 2.5-1.3 5.5-2.2 8.4-3.3 5-2 9.5-4.4 13.3-8C199.3 70 202 58 199 48s-11.5-18.2-21.4-21.7c1.7 9.5.4 19.6-3.8 28.4z" opacity=".4"/></svg>
			{coffeeTipVisible
					? <Coffee closeCoffeeTip={this._closeCoffeeTip.bind(this)} />
					: ''
			}
			</section>
			<section>
					<h2>Tarot reader</h2>
          <figure>
            <img src={require('../assets/tarot-screen.jpg')} />
            <figcaption>Screenshot of the table with a reading of five cards.</figcaption>
          </figure>
          <h4>Closed source, currently in closed beta</h4>
          <p>Web application written in plain Javascript and jQuery, HTML and SCSS. The application is designed mobile and performance first, and a great deal of focus has been laid on shrinking the size of the initial load. You can access the full deck of cards with their corresponding readings from a hidden side navigation. Images and texts are injected via Ajax calls that fires when you open up a specific card. The reading texts, which are in Swedish, are written by my girlfriend Linn. A link to the closed beta is available on demand.</p>
			</section>
			<section>
					<h2>Portfolio</h2>
          <figure>
            <img src={require('../assets/portfolio-screen.png')} />
            <figcaption>Screenshot of the home page of this portfolio with the easter egg activated.</figcaption>
          </figure>
          <h4>Open source, currently in production</h4>
          <p>Web application written in ES6 using React, React-router, Babel and Webpack. As hinted at the front page I wrote this application to learn about React.js. I got a healthy dose of learning about Node.js and NPM as well in the process. I restricted the SCSS styling to only account for stuff being used on the page. The design is fully responsive and 100% custom built.</p>
          <p><a href="https://github.com/apelsinet/portfolio">Source code on Github.</a></p>
			</section>
			<section>
					<h2>Pomodoro Timer</h2>
          <figure>
            <img src={require('../assets/pomodoro-screen.png')} />
            <figcaption>Screenshot of the app counting down during its "Work" state.</figcaption>
          </figure>
          <h4>Open source, currently in production</h4>
          <p>Simple Pomodoro Clock written in plain Javascript. A very useful tool for productivity. It counts down from 25 minutes&mdash;or what ever you set the globals to&mdash;during which you are supposed to work. After the 25 minutes have passed, you are given 5 minutes of rest, and the whole screen turns green.</p>
          <p><a href="https://github.com/apelsinet/pomodoro-timer">Source code on Github.</a></p>
			</section>
			</div>
		);
	}
}
