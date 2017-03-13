import React from 'react';
import '../../bootstrap.css';
import '../../main.css';
import '../../js.css';
import ClientForm from '../clientRequestForm/form'

class WellcomePage extends React.Component {
  render() {
    const { sendRequest } = this.props;
    return (
      <div id="wrapper">
        <a className="contact-ico fadeInIco" href="#">
          <img src="/images/ico01.png" height="216" width="214" alt="image description"></img>
        </a>
        <div className="side-push">
          <header className="header win-height">
            <nav className="navbar navbar-default fadeInNavbar">
              <div className="container container-narrow">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    <img src="/images/logo2.png" height="23" width="136" alt="image description"></img>
                  </a>
                </div>
                <div id="navbar" className="collapse navbar-collapse" aria-expanded="false" role="navigation">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a className="tab-link" href="#request">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="jumbotron">
              <div className="container container-narrow">
                <h1 className="fadeInHeading">Looking for a team <br /> to
                  <span className="text-warning"> rock your product? </span>
                  <span className="subtitle">We’ve got some!</span>
                </h1>
              </div>
            </div>
          </header>
          <main className="main no-space-bottom">
            <div className="short-description-block">
              <div className="container container-narrow">
                <div className="row">
                  <div className="col-sm-6 col-lg-5">
                    <h2>We engineer teams:</h2>
                    <p>scalable, dedicated and <span className="text-marked"><span>cost-effective</span></span></p>
                    <p>complementing your existing ones or working autonomously</p>
                    <p>using relevant expertise and the right approach</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container">
              <div className="footer-holder">
                  <div className="pulse-holder">
                    <div className="pulse-box">
                      <div className="pulse-icon pulse"></div>
                      <div className="pulse-icon pulse02"></div>
                      <div className="pulse-icon pulse03"></div>
                      <div className="pulse-icon pulse04"></div>
                      <div className="pulse-icon pulse05"></div>
                      <div className="pulse-icon pulse06"></div>
                      <div className="pulse-icon pulse07"></div>
                      <div className="pulse-icon pulse08"></div>
                      <div className="ico">
                        <img src="/images/ico01.png" height="216" width="214" alt="image description"></img>
                      </div>
                    </div>
                  </div>
                  <div className="info-holder">
                    <div className="subtitle">
                      <span>
                        <a href="#request" className="tab-link">Request proposal</a> or 
                        <a href="#schedule" className="tab-link">schedule a call</a> with us.
                      </span>
                    </div>
                  </div>
              </div>
              <p className="copy">Brititude</p>
            </div>
          </footer>
          <div className="contact-box">
            <div className="title-holder">
              <h2>Get in touch</h2>
              <a href="#" className="btn-close">x</a>
            </div>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#request" aria-controls="request" role="tab" data-toggle="tab">Request a proposal</a></li>
              <li role="presentation"><a href="#schedule" aria-controls="schedule" role="tab" data-toggle="tab">Schedule a call</a></li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="request">
                <ClientForm type="request-proposal" sendRequest= { sendRequest }/>
                <div className="form-success-msg">Thanks!!!</div>
              </div>
              <div role="tabpanel" className="tab-pane" id="schedule">
                <ClientForm type="request-call" sendRequest= { sendRequest }/>
                <div className="form-success-msg">Thanks!!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

ClientForm.propTypes = {
  sendRequest: React.PropTypes.func.isRequired
}

export default WellcomePage;