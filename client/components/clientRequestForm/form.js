import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/request';
import FormRow from '../common/FormRow';
import Dropzone from 'react-dropzone';

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type, // 'request-proposal' or 'request-call'
      name: '',
      email: '',
      phone: '',
      date: '',
      time:'',
      message:'',
      files: [],
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value });
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
    if (this.props.type === 'request-call') {
      this.state.date = this.date.value;
      this.state.time = this.time.value;
    }
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true});
      this.props.sendRequest(this.state);
      // then response treatment
    }
  }
  
  onDrop (files) {
    this.setState({ files: files });
  }
  
  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="contact-form" encType="multipart/form-data" method="POST" action="/api/clientrequests">
        <FormRow
          value={this.state.name}
          onChange={this.onChange}
          name="name"
          type="text"
          placeholder="Your Name"
          error={errors.name}
          formRequired
        />
        <FormRow
          value={this.state.email}
          onChange={this.onChange}
          name="email"
          type="email"
          placeholder="Your Email"
          error={errors.email}
          formRequired={this.props.type === 'request-proposal'}
        />
        <FormRow
          value={this.state.phone}
          onChange={this.onChange}
          name="phone"
          type="text"
          placeholder="Your #"
          error={errors.phone}
          formRequired={this.props.type === 'request-call'}
        />
        {this.props.type === 'request-call' && 
          <div className="form-row form-required">
            <input
              ref={(input) => { this.date = input }}
              name="date"
              type="text"
              className="form-control form-control-picker date-picker"
              className={classnames("form-control form-control-picker date-picker", {"error": this.state.errors.date})}
              placeholder="Date"
              required
              readOnly
            />
            <input
              ref={(input) => { this.time = input }}
              name="time"
              type="text"
              className={classnames("form-control form-control-picker time-picker", {"error": this.state.errors.time})}
              placeholder="Time"
              required
              readOnly
            />
            <span className="form-text">and suitable time</span>
          </div>
        }
        <div className="form-row">
          <textarea
            value={this.state.message}
            onChange={this.onChange}
            name="message"
            placeholder={this.props.type === 'request-call' ?"Want to use any other means of communication?" : "Message"}
            className="form-control form-control-textarea"
          />
        </div>
        {this.props.type === 'request-proposal' && 
          <div className="form-row file-upload">
            <Dropzone onDrop={this.onDrop} maxSize={ 25 * 1024 * 1024 } style={{
              'display': 'inline-block',
              'cursor': 'pointer'
            }}>
            </Dropzone>
          </div>
        }
        <div className="form-row submit-row">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
            disabled={this.state.isLoading}
          />
          <span className="note">This is mandatory</span>
        </div>
      </form>
    )
  }
};

ClientForm.propTypes = {
  sendRequest: React.PropTypes.func.isRequired
}

ClientForm.contextTypes = {
  router:React.PropTypes.object.isRequired
}


export default ClientForm;