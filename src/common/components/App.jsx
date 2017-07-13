import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TodoApp extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
						<li><Link to="/numbers" activeStyle={{ color: 'red' }}>Number Manager</Link></li>
					</ul>
				</nav>
				<section>
					{this.props.children}
				</section>
			</div>
		);
	}
}
