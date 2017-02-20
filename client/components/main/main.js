import React from 'react';
import Header from '../header/header'

const Main = React.createClass({
  render() {
    return (
      <div id="page">
        <div className="container">
          <div className="wrapper">
            <Header/>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
});

// old:
// {React.cloneElement(this.props.children, {...this.props})}﻿

// new:
// {React.cloneElement({...this.props}.children, {...this.props})}

export default Main;
