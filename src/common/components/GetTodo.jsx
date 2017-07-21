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
		this.props.setGetId('');
		if (this.props.params.id) {
			this.props.getTodo(this.props.params.id);
		}
	}

	handleChange(event) {
		this.props.setGetId(event.target.value);
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
					<input type="text" placeholder="ID" onChange={e => this.handleChange(e)}/>
				</div>
				<div>
					<input type="submit" value="Get" disabled={!this.props.id} className={submitClass}/>
					<i className="loader">{this.props.loadingMessage}</i>
				</div>
			</form>
		);

		let nodes = (
			<div>
				<h1>Get TODO Reminder</h1>
				{!this.props.params.id ? form : null}
				{
					this.props.todo ? <Todo/>
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
		id: todoReducer.get.id,
		todo: todoReducer.todo,
		loadingMessage: todoReducer.loadingMessage
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setGetId: id => {
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
