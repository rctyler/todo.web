import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setFindTodoId, getTodoFromLink } from '../actions/todoActions';

class GetTodo extends Component {

	static contextTypes = {
		store: React.PropTypes.object.isRequired
	};

	handleClick(event) {
		if (this.props.id) {
			this.props.getTodoFromLink(this.props.id);
		}
	}

	handleChange(event) {
		this.props.params.id = null;
		this.props.setFindTodoId(event.target.value);
	}

	render() {
		let id = this.props.params.id || this.props.id;
		let url = this.props.id ? `/todo/get/${this.props.id}` : '/todo/get';
		let nodes = (
			<div>
				<h1>Get TODO Item</h1>
				<div>
					id:
					<input value={id} type="text" onChange={e => this.handleChange(e)}/>
				</div>
				<div>
					<Link to={url} onClick={e => this.handleClick(e)}>Get</Link>
					<span>{this.props.loadingMessage}</span>
				</div>
				<section>
					{this.props.children}
				</section>
			</div>
		);

		return nodes;
	}
}

function mapStateToProps({ todoReducer }, ownProps) {
	return {
		id: todoReducer.findTodoId
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setFindTodoId: id => {
			dispatch(setFindTodoId(id));
		},
		getTodoFromLink: id => {
			dispatch(getTodoFromLink(id));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTodo);
