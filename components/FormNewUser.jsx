import React from 'react';

import axios from 'axios';

import App from './App';
import GenericInput from './GenericInput';
import SubmitButton from './SubmitButton';
import FormAlert from './FormAlert';

const FormNewUser = React.createClass({
  getInitialState: function()
  {
      return ({
        id: 0,
        name: 'Default Name',
        job: 'Default Job',
        status: null,
      });
  },

  render: function() {
    return (
      <App>
        <FormAlert status={this.state.status}/>
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
      </App>
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

    const _this = this;

    console.log('FORM STATE BEFORE SAVE', this.state);

    axios
      .post('http://localhost:3033/users', this.state)
      .then((response) => {

        _this.setState({
          id: 0,
          name: 'Default Name',
          job: 'Default Job',
          status: 'data saved'
        });
      });
  } 
});

export default FormNewUser;
