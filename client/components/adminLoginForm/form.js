import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/login';
import FormRow from '../common/FormRow';

class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false,
      isNeedToSave: false
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
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
    
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true});
      this.props.login(this.state).then(
        (res) => this.context.router.push('/server/dashboard'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }
  
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form">
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
              <input type="checkbox" name="isNeedToSave" id="remember-box" onChange={this.onChange} ></input>
              <label htmlFor="remember-box">Remember me</label>
            </div>
            <div className="form-row submit-row">
              <input
                className="btn btn-primary"
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
  login: React.PropTypes.func.isRequired
}

AdminForm.contextTypes = {
  router:React.PropTypes.object.isRequired
}


export default AdminForm;