import React, { Component, PropTypes } from 'react';

export default class ShortLink extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<h1>Welcome to the TODO Manager Web Application</h1>
				Add, Get, and Delete TODO reminders
			</div>
		);

		return nodes;
	}
}
