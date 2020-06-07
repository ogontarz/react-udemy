import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './useLocation';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
	const [lat, errorMessage] = useLocation();

	let content;
	if (errorMessage && !lat) {
		content = <div>Error: {errorMessage}</div>;
	} else if (!errorMessage && lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message="Please accept the location request" />;
	}
	return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
