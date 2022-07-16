import React from 'react';
import { User } from '../model/Model';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component<{
  user?: User;
}> {
  render(): React.ReactNode {
    const loginLogOut = (
      <Link
        to={this.props.user ? '/logout' : '/login'}
        style={{ float: 'right' }}
      >
        {this.props.user ? this.props.user.username : 'Login'}
      </Link>
    );
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/spaces">Spaces</Link>
        {loginLogOut}
      </div>
    );
  }
}
