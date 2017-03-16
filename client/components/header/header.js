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
      </div>;
    const navTabs = 
      <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#payment" aria-controls="payment" role="tab" data-toggle="tab">Payment</a></li>
          <li role="presentation"><a href="#orders" aria-controls="orders" role="tab" data-toggle="tab">Orders</a></li>
          <li role="presentation"><a href="#clients" aria-controls="clients" role="tab" data-toggle="tab">Clients</a></li>
      </ul>
    return (
      <header className="header">
        {isAuth && userInfoLine}
        <div className="header-holder">
          <a href="#" className="logo">
            <img src="/images/logo.png" height="23" width="136" alt="img description"></img>
            <span className="title">office</span>
          </a>
          {isAuth && navTabs}
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

Header.contextTypes = {
  router:React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, { logout })(Header);