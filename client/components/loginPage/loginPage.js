import React from 'react'
import AdminLoginForm from '../adminLoginForm/form'


class LoginPage extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            <AdminLoginForm login={login}/>
          </div>
        </div>
      </main>
    )
  }
};

LoginPage.propTypes = {
   login: React.PropTypes.func.isRequired
}

export default LoginPage;