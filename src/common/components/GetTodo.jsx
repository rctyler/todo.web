import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Todo from './Todo';
import { setFindTodoId, getTodo, setEmptyTodo } from '../actions/todoActions';

class GetTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired
	};

	componentWillMount() {
		this.props.setEmptyTodo();
		this.props.setId('');
		if (this.props.params.id) {
			this.props.getTodo(this.props.params.id);
		}
	}

	handleChange(event) {
		this.props.setId(event.target.value);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.getTodo(this.props.id);
	}

	render() {
		let submitClass = !this.props.id ? 'disabled' : '';
		let form = (
			<form onSubmit={e => this.handleSubmit(e)}>
				<div>
					<input value={this.props.id} type="text" placeholder="ID" onChange={e => this.handleChange(e)}/>
				</div>
				<div>
					<input type="submit" value="Get" disabled={!this.props.id} className={submitClass}/>
					<i className="loader">{this.props.loadingMessage}</i>
				</div>
				{this.props.todoId ? <br/> : null}
			</form>
		);

		let nodes = (
			<div>
				<h1>Get TODO Reminder</h1>
				{!this.props.params.id ? form : null}
				{
					this.props.todoId ? <Todo/>
						: this.props.params.id ? <Todo/>
						: null
				}
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		id: todoReducer.findTodoId,
		todoId: todoReducer.getTodoId,
		loadingMessage: todoReducer.loadingMessage
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setId: id => {
			dispatch(setFindTodoId(id));
		},
		getTodo: id => {
			dispatch(getTodo(id));
		},
		setEmptyTodo: () => {
			dispatch(setEmptyTodo());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTodo);
