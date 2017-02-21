import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import FormRow from '../common/FormRow';

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
  
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    
    if (!isValid) {
      this.setState({ errors });
    }
    
    return isValid;
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    if (true) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {},
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }
  
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form" encType="multipart/form-data" method="POST" action="server/php/" >
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <h1>Login</h1>
            <FormRow
              value={this.state.username}
              onChange={this.onChange}
              name="username"
              type="text"
              placeholder="Your Login"
              data-required
              error={errors.username}
            />
            <FormRow
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="Your Password"
              data-required
              error={errors.password}
              hasLink
            />
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