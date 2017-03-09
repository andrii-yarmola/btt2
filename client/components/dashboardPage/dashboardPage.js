import React from 'react';

class DashboardPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            this is dashboard
          </div>
        </div>
      </main>
    )
  }
};


export default DashboardPage;