import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDeleteClick = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	renderActions() {
		return (
			<React.Fragment>
				<button className="ui button negative" onClick={this.onDeleteClick}>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		}
		return `Are you sure you want to delete stream \"${this.props.stream.title}\"?`;
	}

	render() {
		return (
			<div>
				<Modal
					onDismiss={() => history.push('/')}
					title="Delete Stream"
					content={this.renderContent()}
					actions={this.renderActions()}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
