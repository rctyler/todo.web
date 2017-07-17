import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<div>ID: {this.props.id}</div>
				<div>TODO: {this.props.message}</div>
				<div>When: {this.props.when}</div>
				<div>Author: {this.props.author}</div>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		id: todoReducer.getTodoId,
		message: todoReducer.getTodoMessage,
		when: todoReducer.getTodoWhen,
		author: todoReducer.getTodoAuthor,
		shouldNotGetTodoOnMount: todoReducer.shouldNotGetTodoOnMount
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
