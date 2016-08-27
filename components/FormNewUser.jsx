import React from 'react';

import axios from 'axios';

import GenericInput from './GenericInput';
import SubmitButton from './SubmitButton';

const FormNewUser = React.createClass({
  getInitialState: function()
  {
      return ({
        id: 0,
        name: 'Default Name',
        job: 'Default Job',
      });
  },

  render: function() {
    return (
      <div>
        <GenericInput
          name="id"
          onChange={this.handleId}
          value={this.state.id}
        />
        <GenericInput
          name="name"
          onChange={this.handleName}
          value={this.state.name}
        />
        <GenericInput
          name="job"
          onChange={this.handleJob}
          value={this.state.job}
        />
        <SubmitButton
          value="Click me and send the form!"
          onClick={this.handleSubmit}
        />
      </div>
      )
  },

  handleId: function(event) {

    const id = event.target.value;
    this.setState({ id: id });
  },

  handleName: function(event) {

    const name = event.target.value;
    this.setState({ name: name });
  },

  handleJob: function(event) {

    const job = event.target.value;
    this.setState({ job: job });
  },

  handleSubmit: function() {

    console.log('FORM STATE BEFORE SAVE', this.state);

    axios
      .post('http://localhost:3033/users', this.state)
      .then((response) => {

        this.setState({
          status: 'data saved'
        });
      });
  } 
});

export default FormNewUser;
