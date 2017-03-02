import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { isAuth, user} = this.props.auth;
    const userInfoLine = 
      <div className="user-info-line">
        <span>Hello, <em className="username">{user.username}</em>!</span>
        <a href="#" className="btn btn-primary">Sign out</a>
      </div>
    return (
      <header className="header">
        {isAuth && userInfoLine}
        <div className="header-holder">
          <a href="#" className="logo">
            <img src="images/logo.png" height="23" width="136" alt="img description"></img>
            <span className="title">office</span>
          </a>
        </div>
      </header>
    )
  }
};

Header.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);