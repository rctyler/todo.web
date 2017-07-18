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
				<section>
					<h1>About</h1>
				</section>
			</div>
		);
	}
}
