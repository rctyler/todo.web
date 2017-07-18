import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setMessage, setWhen, setAuthor, addTodo }
	from '../actions/todoActions';

class AddTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	handleSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.props.message, this.props.when, this.props.author);
	}

	render() {
		let disableSubmitButton = !this.props.message && !this.props.when && !this.props.author;
		let submitClass = disableSubmitButton ? 'disabled' : '';
		let nodes = (
			<div>
				<h1>Add New TODO Item</h1>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<label>TODO</label>
						<input type="text" onChange={e => this.props.setTodoMessage(e.target.value)}/>
					</div>
					<div>
						<label>When</label>
						<input type="text" onChange={e => this.props.setWhen(e.target.value)}/>
					</div>
					<div>
						<label>Author</label>
						<input type="text" onChange={e => this.props.setAuthor(e.target.value)}/>
					</div>
					<div>
						<input type="submit" value="Add" disabled={disableSubmitButton} className={submitClass} />
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
		message: todoReducer.message,
		when: todoReducer.when,
		author: todoReducer.author,
		loadingMessage: todoReducer.loadingMessage,
		log: todoReducer.log
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
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
