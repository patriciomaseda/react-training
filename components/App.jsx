import React from 'react';
import { Link } from 'react-router';

import Header from './Header.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
});
