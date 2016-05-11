import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
			<ul role="nav">
			<li><IndexLink to="/" activeStyle={{ color: '#222' }}>Home</IndexLink></li>
			<li><Link to="/about" activeStyle={{ color: '#222' }}>About</Link></li>
			<li><Link to="/blog" activeStyle={{ color: '#222' }}>Blog</Link></li>
			<li><Link to="/contact" activeStyle={{ color: '#222' }}>Contact</Link></li>
			</ul>
			</div>
		);
	}
}
