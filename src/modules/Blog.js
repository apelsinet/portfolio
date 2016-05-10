import React, {PropTypes} from 'react';

export default class Blog extends React.Component {
	render() {
		return (
			<div>
				<section>
					<object className="svg-blog" data={require('../assets/blog.svg')} type="image/svg+xml"></object>
					<h2>Third blog post</h2>
					<p className="publication-date">Published 2016-04-28.</p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<a href="">READ MORE</a>
				</section>
				<section>
					<h2>Second blog post</h2>
					<p className="publication-date">Published 2016-04-25</p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<a href="">READ MORE</a>
				</section>
				<section>
					<h2>First blog post</h2>
					<p className="publication-date">Published 2016-04-22</p>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<a href="">READ MORE</a>
				</section>
			</div>
		);
	}
}
