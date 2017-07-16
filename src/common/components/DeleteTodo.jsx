import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setMessage, setWhen, setAuthor, addTodo }
	from '../actions/todoActions';

class DeleteTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	handleSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.props.message, this.props.when, this.props.author);
	}

	render() {
		let nodes = (
			<div>
				<h1>Delete TODO Item</h1>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
