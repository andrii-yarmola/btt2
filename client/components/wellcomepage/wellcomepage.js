import React from 'react';
import '../../bootstrap.css';
import '../../main.css';
import '../../js.css';

class WellcomePage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
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
                <form encType="multipart/form-data" method="POST" action="/api/clientrequests" className="contact-form">
                  <div className="form-row form-required">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required>
                    </input>
                  </div>
                  <div className="form-row form-required">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required>
                    </input>
                  </div>
                  <div className="form-row">
                    <input type="text" name="phone" className="form-control" placeholder="Your #">
                    </input>
                  </div>
                  <div className="form-row">
                    <textarea name="message" className="form-control form-control-textarea" placeholder="Message"></textarea>
                  </div>
                  <div className="form-row file-upload">
                    <ul className="file-list">
                      <li className="uploading">
                        <div className="upload-row">
                          <span className="name"></span>
                          <a href="#" className="remove text-danger">Remove</a>
                        </div>
                        <div className="upload-row upload-row02">
                          <span className="progress"><span className="bar"></span></span>
                          <a href="#" className="cancel">Cancel upload</a>
                        </div>
                      </li>
                    </ul>
                    <input type="file" className="form-control" data-jcf='{"buttonText": "Upload file"}' multiple>
                    </input>
                    <span className="file-note">(max. 3 files)</span>
                  </div>
                  <div className="form-row submit-row">
                    <input type="submit" value="Submit" className="btn btn-primary">
                    </input>
                    <span className="note">This is mandatory</span>
                  </div>
                </form>
                <div className="form-success-msg">Thanks!!!</div>
              </div>
              <div role="tabpanel" className="tab-pane" id="schedule">
                <form encType="multipart/form-data" method="POST" action="/api/clientrequests" className="contact-form">
                  <input type="hidden" name="type" value="shedule">
                  </input>
                  <div className="form-row form-required">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required>
                    </input>
                  </div>
                  <div className="form-row">
                    <input type="email" name="email" className="form-control" placeholder="Your Email">
                    </input>
                  </div>
                  <div className="form-row form-required">
                    <input type="text" name="phone" className="form-control" placeholder="Your #" required>
                    </input>
                  </div>
                  <div className="form-row form-required">
                    <input type="text" className="form-control form-control-picker date-picker" placeholder="Date" name="date" required readOnly>
                    </input>
                    <input type="text" className="form-control form-control-picker time-picker" placeholder="Time" name="time" required readOnly>
                    </input>
                    <span className="form-text">and suitable time</span>
                  </div>
                  <div className="form-row">
                    <textarea className="form-control form-control-textarea" name="message" placeholder="Want to use any other means of communication?"></textarea>
                  </div>
                  <div className="form-row submit-row">
                    <input type="submit" value="Submit" className="btn btn-primary">
                    </input>
                    <span className="note">This is mandatory</span>
                  </div>
                </form>
                <div className="form-success-msg">Thanks!!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default WellcomePage;