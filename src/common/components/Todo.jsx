import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTodoMessage, setWhen, setAuthor, addTodo, increment, decrement, loadNumber, saveNumber } from '../actions/numberActions';

class Todo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	handleTodoChange(event) {
		return event => this.props.setTodoMessage(event.target.value);
	}

	handleWhenChange(event) {
		return event => this.props.setWhen(event.target.value);
	}

	handleAuthorChange(event) {
		return event => this.props.setAuthor(event.target.value);
	}

	render() {
		let nodes = (
			<div>
				<h1>TODO Manager</h1>
				 <form onSubmit={() => this.props.addTodo()}>
					<div>
						TODO: <input type="text" value={this.props.todo} onChange={this.handleTodoChange}/>
					</div>
					<div>
						When: <input type="text" value={this.props.when} onChange={this.handleWhenChange}/>
					</div>
					<div>
						Author: <input type="text" value={this.props.author} onChange={this.handleAuthorChange}/>
					</div>
					<div>
						<input type="submit" value="Add"/>
					</div>
				</form>
				<h1>Number Manager</h1>
				<span>the number is {this.props.number}</span>
				<button onClick={() => this.props.increment()}>increment</button>
				<button onClick={() => this.props.decrement()}>decrement</button>
				<button onClick={() => this.props.saveNumber(this.props.number)}>save</button>
				<button onClick={() => this.props.loadNumber()}>load saved</button>
				<span>{this.props.message}</span>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ numberReducer }, ownProps) {
	return {
		todoMessage: numberReducer.todoMessage,
		when: numberReducer.when,
		author: numberReducer.author,
		number: numberReducer.number,
		message: numberReducer.message
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setTodoMessage: message => {
			dispatch(setTodoMessage(message));
		},
		setWhen: when => {
			dispatch(setWhen(when));
		},
		setAuthor: author => {
			dispatch(setAuthor(author));
		},
		addTodo: () => {
			dispatch(addTodo());
		},
		increment: () => {
			dispatch(increment());
		},
		decrement: () => {
			dispatch(decrement());
		},
		loadNumber: () => {
			dispatch(loadNumber());
		},
		saveNumber: number => {
			dispatch(saveNumber(number));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
