import React from 'react';
import '../../main.css';

class WellcomePage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div id="wrapper">
        <a className="contact-ico fadeInIco" href="#">
          <img src="/images/ico01.png" height="216" width="214" alt="image description"></img>
        </a>
        <main className="main">
          <div className="content">
            <div className="container container-narrow">
              WELLCOME!!!
            </div>
          </div>
        </main>
      </div>
    )
  }
};


export default WellcomePage;