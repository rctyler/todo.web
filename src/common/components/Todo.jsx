import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	render() {
		let nodes = (
			<div>
				<table className="todo">
					<tbody>
						<tr>
							<th>ID</th>
							<th>TODO</th>
							<th>When</th>
							<th>Author</th>
						</tr>
						<tr>
							<td>{this.props.id}</td>
							<td>{this.props.message}</td>
							<td>{this.props.when}</td>
							<td>{this.props.author}</td>
						</tr>
					</tbody>
				</table>
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
