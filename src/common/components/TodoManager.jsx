import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class TodoManager extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<section>
					{this.props.children}
				</section>
				<section>
					<div>
						<h3>Log of events:</h3>
						<textarea readOnly value={this.props.log}/>
					</div>
				</section>
			</div>
		);
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		log: todoReducer.log
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoManager);
