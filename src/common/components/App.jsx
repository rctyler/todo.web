import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to="/" activeStyle={{ color: 'red' }}>Home</Link></li>
						<li><Link to="/todo" activeStyle={{ color: 'red' }}>Todo</Link></li>
					</ul>
				</nav>
				<section>
					{this.props.children}
				</section>
			</div>
		);
	}
}
