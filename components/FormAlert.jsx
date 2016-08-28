import React from 'react';

class FormAlert extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		if (! this.props.status) {
			return null;
		}

	  return (
	    <div className="formAlert">
	      Data was saved correctly.
	    </div>
	  );
	}
}

export default FormAlert;