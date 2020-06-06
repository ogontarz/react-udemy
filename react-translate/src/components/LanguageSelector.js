import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSeletector extends React.Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div>
				<div>Select a language:</div>
				<i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
				<i className="flag france" onClick={() => this.context.onLanguageChange('french')} />
			</div>
		);
	}
}

export default LanguageSeletector;
