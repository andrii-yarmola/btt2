import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/actionCreators';

class Header extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  
  render() {
    const { isAuth, user} = this.props.auth;
    const userInfoLine = 
      <div className="user-info-line">
        <span>Hello, <em className="username">{user.username}</em>!</span>
        <a href="#" className="btn btn-primary" onClick={this.logout.bind(this)}>Sign out</a>
      </div>
    return (
      <header className="header">
        {isAuth && userInfoLine}
        <div className="header-holder">
          <a href="#" className="logo">
            <img src="/images/logo.png" height="23" width="136" alt="img description"></img>
            <span className="title">office</span>
          </a>
        </div>
      </header>
    )
  }
};

Header.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Header);