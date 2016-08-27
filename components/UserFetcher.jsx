import React from 'react';
import axios from 'axios';

import UserList from './UserList';

class UserFetcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {

    axios
      .get('http://localhost:3033/users')
      .then((response) => {

        this.setState({
          users: response.data
        });
      });
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
};

export default UserFetcher;
