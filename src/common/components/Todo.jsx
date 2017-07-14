import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTodoMessage, setWhen, setAuthor, addTodo }
	from '../actions/numberActions';

class Todo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired,
	};

	handleTodoMessageChange(event) {
		return event => this.props.setTodoMessage(event.target.value);
	}

	handleTodoWhenChange(event) {
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
						TODO: <input type="text" value={this.props.todo} onChange={this.handleTodoMessageChange}/>
					</div>
					<div>
						When: <input type="text" value={this.props.when} onChange={this.handleTodoWhenChange}/>
					</div>
					<div>
						Author: <input type="text" value={this.props.author} onChange={this.handleTodoAuthorChange}/>
					</div>
					<div>
						<input type="submit" value="Add"/>
					</div>
				</form>
				<span>{this.props.loadingMessage}</span>
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
		loadingMessage: numberReducer.loadingMessage
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
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
