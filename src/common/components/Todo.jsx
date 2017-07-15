import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setMessage, setWhen, setAuthor, addTodo }
	from '../actions/numberActions';

class Todo extends Component {

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
				<h1>TODO Manager</h1>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<div>
						TODO:
						<input type="text" onChange={e => this.props.setTodoMessage(e.target.value)}/>
					</div>
					<div>
						When:
						<input type="text" onChange={e => this.props.setWhen(e.target.value)}/>
					</div>
					<div>
						Author:
						<input type="text" onChange={e => this.props.setAuthor(e.target.value)}/>
					</div>
					<div>
						<input type="submit" value="Add"/>
						<span>{this.props.loadingMessage}</span>
					</div>
				</form>
				<div>
					<h3>Log of events:</h3>
					<textarea readOnly value={this.props.log}/>
				</div>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ numberReducer }, ownProps) {
	return {
		message: numberReducer.message,
		when: numberReducer.when,
		author: numberReducer.author,
		loadingMessage: numberReducer.loadingMessage,
		log: numberReducer.log
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
