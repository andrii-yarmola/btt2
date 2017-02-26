import React from 'react'
import AdminSignupForm from '../adminSignupForm/form'


class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            <AdminSignupForm userSignupRequest={userSignupRequest}/>
          </div>
        </div>
      </main>
    )
  }
};


AdminSignupForm.propTypes = {
   userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupPage;