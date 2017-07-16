import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTodo, setFindTodoId } from '../actions/todoActions';

class Todo extends Component {

	componentWillMount() {
		if (!this.props.shouldNotGetTodoOnMount) {
			this.props.get(this.props.params.id);
		}
	}

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let todo = null;

		if (this.props.id ) {
			todo = (
				<div>
					<div>ID: {this.props.id}</div>
					<div>TODO: {this.props.message}</div>
					<div>When: {this.props.when}</div>
					<div>Author: {this.props.author}</div>
				</div>
			);
		}

		let nodes = (
			<div>
				{todo}
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
		get: id => {
			dispatch(getTodo(id));
		},
		setFindTodoId: id => {
			dispatch(setFindTodoId(id));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
