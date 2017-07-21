import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class About extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<h1>About</h1>
				Isomorphic front-end web application, using React with Redux, built on top of my Todo API.
			</div>
		);
	}
}
