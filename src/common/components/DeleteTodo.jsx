import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, setDeleteTodoId } from '../actions/todoActions';

class DeleteTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	componentWillUnmount() {
		this.props.setId('');
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.deleteTodo(this.props.id);
	}

	render() {
		let id = this.props.id || '';
		let submitClass = !this.props.id ? 'disabled' : '';
		let nodes = (
			<div>
				<h1>Delete TODO Item</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<label>ID</label>
						<input value={id} type="text" onChange={e => this.props.setId(e.target.value)}/>
					</div>
					<div>
						<input type="submit" value="Delete" disabled={!this.props.id} className={submitClass}/>
						<span>{this.props.loadingMessage}</span>
					</div>
				</form>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		id: todoReducer.deleteTodoId,
		loadingMessage: todoReducer.loadingMessage
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setId: id => {
			dispatch(setDeleteTodoId(id));
		},
		deleteTodo: id => {
			dispatch(deleteTodo(id));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
