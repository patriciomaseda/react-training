import React from 'react';
import { Link } from 'react-router';

import Header from './Header';

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/links">Links</Link></li>
        </ul>
      </div>
    );
  }
});
