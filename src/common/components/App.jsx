import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class App extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {

		const homeClass = this.props.location.pathname === '/' ? 'active' : '';
		const addClass = this.props.location.pathname.match(/^\/todo\/add/) ? 'active' : '';
		const getClass = this.props.location.pathname.match(/^\/todo\/get/) ? 'active' : '';
		const deleteClass = this.props.location.pathname.match(/^\/todo\/delete/) ? 'active' : '';
		const aboutClass = this.props.location.pathname.match(/^\/about/) ? 'active' : '';

		return (
			<div>
				<header>
					<nav>
						<ul>
							<li><Link to="/" className={homeClass}>Home</Link></li>
							<li><Link to="/todo/add" className={addClass}>Add</Link></li>
							<li><Link to="/todo/get" className={getClass}>Get</Link></li>
							<li><Link to="/todo/delete" className={deleteClass}>Delete</Link></li>
							<li><Link to="/about" className={aboutClass}>About</Link></li>
						</ul>
					</nav>
				</header>
				<section className="content">
					{this.props.children}
				</section>
			</div>
		);
	}
}
