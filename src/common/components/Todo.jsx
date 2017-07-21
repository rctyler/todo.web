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
							<td>{this.props.todo.id}</td>
							<td>{this.props.todo.message}</td>
							<td>{this.props.todo.when}</td>
							<td>{this.props.todo.author}</td>
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
		todo: todoReducer.todo || {}
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
