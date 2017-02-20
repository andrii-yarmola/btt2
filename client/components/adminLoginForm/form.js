import React from 'react';
import classnames from 'classnames';

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  onSubmit(e) {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }
  
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form" encType="multipart/form-data" method="POST" action="server/php/" >
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <h1>Login</h1>
            <div className="form-row">
              <input 
                value={this.state.username}
                onChange={this.onChange}
                name="username"
                type="text"
                className={classnames("form-control", { 'error': errors.username })}
                placeholder="Your Login"
                data-required="true"
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
            <div className="form-row">
              <input type="password"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
                className={classnames("form-control", { 'error': errors.password })}
                placeholder="Your Password"
                data-required="true"
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
              <div className="forgot-link">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <div className="form-row">
              <input type="checkbox" id="remember-box"></input>
              <label htmlFor="remember-box">Remember me</label>
            </div>
            <div className="form-row submit-row">
              <input className="btn btn-primary"
                type="submit"
                value="Login"
                disabled={this.state.isLoading}
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
};

AdminForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default AdminForm;