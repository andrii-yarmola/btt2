import React from 'react';
import classnames from 'classnames';
import FormRow from '../common/FormRow';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderName: '',
      price: '',
      description: '',
      errors: {},
      isLoading: false,
      approvalUrl: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true});
    this.props.generatePaymentLink(this.state).then(
      (res) => {
        this.setState({ isLoading: false, approvalUrl: res.data.approvalUrl })
      },
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }
  
  render() {
    const { errors } = this.state;
    return (
      <div className="container container-narrow">
        <form className="payment-form" onSubmit={this.onSubmit}>
          <h1>Payment form</h1>
          <div className="row">
            <div className="col-xs-6">
              <FormRow
                value={this.state.orderName}
                onChange={this.onChange}
                name="orderName"
                type="text"
                placeholder="Order name"
                error={errors.orderName}
                formRequired
              />
              <FormRow
                value={this.state.price}
                onChange={this.onChange}
                name="price"
                type="text"
                error={errors.price}
                formRequired
                classAdditional="summa-row"
              />
              <div className="form-row">
                <textarea
                  value={this.state.description}
                  onChange={this.onChange}
                  name="description"
                  className="form-control form-control-textarea"
                  placeholder="Description">
                </textarea>
              </div>
            </div>
          </div>
          <div className="form-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="form-row submit-row">
            <div className="btn btn-submit btn-primary">
              <input
                type="submit"
                value="Generate payment link"
                className="btn btn-primary"
                disabled={this.state.isLoading}
              />
            </div>
          </div>
          {this.state.approvalUrl && 
            <div className="form-row">
              <a href={this.state.approvalUrl}>
                {this.state.approvalUrl}
              </a>
            </div>
          }
        </form>
    </div>
    )
  }
};

PaymentForm.contextTypes = {
  router:React.PropTypes.object.isRequired
}


export default PaymentForm;