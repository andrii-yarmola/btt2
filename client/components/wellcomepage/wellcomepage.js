import React from 'react'

class WellcomePage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            WELLCOME
          </div>
        </div>
      </main>
    )
  }
};


export default WellcomePage;