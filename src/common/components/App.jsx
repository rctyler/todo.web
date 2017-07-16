import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class App extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/todo/add">Add</Link></li>
						<li><Link to="/todo/get">Get</Link></li>
						<li><Link to="/todo/delete">Delete</Link></li>
					</ul>
				</nav>
				<section>
					{this.props.children}
				</section>
			</div>
		);
	}
}
