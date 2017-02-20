import React from 'react'

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="header-holder">
          <a href="#" className="logo">
            <img src="images/logo.png" height="23" width="136" alt="img description"></img>
            <span className="title">office</span>
          </a>
        </div>
      </header>
    )
  }
});

export default Header;