import React from 'react';

const SubmitButton = React.createClass({

  render: function() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
});

export default SubmitButton;
