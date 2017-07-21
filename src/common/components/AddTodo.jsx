import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setMessage, setWhen, setAuthor, addTodo, setEmptyTodo }
	from '../actions/todoActions';
import Todo from './Todo';

class AddTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	componentWillMount() {
		this.props.setEmptyTodo();
		this.props.setTodoMessage('');
		this.props.setWhen('');
		this.props.setAuthor('');
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.props.message, this.props.when, this.props.author);
	}

	setTodoMessage(event) {
		this.props.setTodoMessage(event.target.value);
	}

	setWhen(event) {
		this.props.setWhen(event.target.value);
	}

	setAuthor(event) {
		this.props.setAuthor(event.target.value);
	}

	render() {
		let disableSubmitButton = !this.props.message || !this.props.when | !this.props.author;
		let submitClass = disableSubmitButton ? 'disabled' : '';
		let nodes = (
			<div>
				<h1>Add New TODO Reminder</h1>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<input type="text" placeholder="TODO" onChange={e => this.setTodoMessage(e)}/>
					</div>
					<div>
						<input type="text" placeholder="When" onChange={e => this.setWhen(e)}/>
					</div>
					<div>
						<input type="text" placeholder="Author" onChange={e => this.setAuthor(e)}/>
					</div>
					<div>
						<input type="submit" value="Add" disabled={disableSubmitButton} className={submitClass} />
						<span className="loader">{this.props.loadingMessage}</span>
					</div>
				</form>
				{ this.props.todoId ? <Todo/> : null }
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		message: todoReducer.message,
		when: todoReducer.when,
		author: todoReducer.author,
		loadingMessage: todoReducer.loadingMessage,
		log: todoReducer.log,
		todoId: todoReducer.getTodoId
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setTodoMessage: message => {
			dispatch(setMessage(message));
		},
		setWhen: when => {
			dispatch(setWhen(when));
		},
		setAuthor: author => {
			dispatch(setAuthor(author));
		},
		addTodo: (message, when, author) => {
			dispatch(addTodo(message, when, author));
		},
		setEmptyTodo: () => {
			dispatch(setEmptyTodo());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
