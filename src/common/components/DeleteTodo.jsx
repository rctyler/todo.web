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

	setId(event) {
		this.props.setId(event.target.value);
	}

	render() {
		let id = this.props.id || '';
		let submitClass = !this.props.id ? 'disabled' : '';
		let nodes = (
			<div>
				<h1>Delete TODO Reminder</h1>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<input value={id} type="text" placeholder="ID" onChange={e => this.setId(e)}/>
					</div>
					<div>
						<input type="submit" value="Delete" disabled={!this.props.id} className={submitClass}/>
						<i className="loader">{this.props.loadingMessage}</i>
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
