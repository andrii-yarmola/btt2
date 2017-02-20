import React from 'react'
import AdminForm from '../adminLoginForm/form'


class LoginPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            <AdminForm userSignupRequest={userSignupRequest}/>
          </div>
        </div>
      </main>
    )
  }
};


AdminForm.propTypes = {
   userSignupRequest: React.PropTypes.func.isRequired
}

export default LoginPage;