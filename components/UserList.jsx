import React from 'react';
import { Link } from 'react-router';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  renderUsers() {

    if (this.props.users.length <= 0) {
      return (
        <li> Loading ...</li>
      );
    }

    return this.props.users.map( function(user) {
      return (
        <li key={user.id}>{user.id} -- {user.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
};

UserList.defaultProps = {
  users: []
};

export default UserList;
