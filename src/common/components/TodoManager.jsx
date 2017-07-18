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
				<div className="todoAction">
					{this.props.children}
				</div>
				<div className="todoLog">
					<h1>Log of events</h1>
					<textarea readOnly value={this.props.log}/>
				</div>
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
