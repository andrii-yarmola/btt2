import React from 'react';

class ClientDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      phone:'',
      time:'',
      date:'',
      type:'',
      added:'',
      message:'',
      file1:'',
      file2:'',
      file3:''
    };
  }
  
  loadDetails() {
    this.props.getClient(this.props.params.id)
      .then(
      res => this.setState({ 
        name: res.data.data.name,
        email: res.data.data.email,
        phone: res.data.data.phone,
        time: res.data.data.time,
        date: res.data.data.date,
        type: res.data.data.type,
        added: res.data.data.added,
        message: res.data.data.message,
        file1: res.data.data.file1,
        file2: res.data.data.file2,
        file3: res.data.data.file3
      }),
      err => console.log('err')
    )
  }
  
  componentWillMount() {
    this.loadDetails();
  }
  
  render() {
    return (
      <main className="main">
        <div className="content">
          <div className="container container-narrow">
            <form className="client-detail-form">
              <h1>{this.state.name}</h1>
              <div className="row">
                <div className="col-xs-6">
                  <div className="form-row">
                    <input type="text" className="form-control" value={this.state.name} readOnly/>
                  </div>
                  <div className="form-row">
                    <input type="email" className="form-control" value={this.state.email} readOnly/>
                  </div>
                  <div className="form-row">
                    <input type="tel" className="form-control" value={this.state.phone} readOnly/>
                  </div>
                  <div className="form-row form-row-static">
                    <label>Meeting scheduled on</label>
                    <span className="form-control-static">16 Nov 2016</span>
                    <span className="form-control-static">{this.state.date}</span>
                    <label>at</label>
                    <span className="form-control-static">5 : 30 pm EST</span>
                  </div>
                  <div className="form-row form-row-static">
                    <label>Type of contact</label>
                    <span className="form-control-static"> request</span>
                  </div>
                  <div className="form-row form-row-static">
                    <label>Added on</label>
                    <span className="form-control-static form-control-static-gray">11 Aug 2016</span>
                  </div>
                </div>
              </div>
              <div className="form-row form-row-static form-row-text">
                <label>Message from the client:</label>
                <div className="form-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="download-block">
          <div className="container container-narrow">
            <ul className="download-list">
              <li>
                <span>Project_brief_final_EN.pdf</span>
                <a href="#">Download</a>
              </li>
              <li>
                <span>Company-brand-book-offical-print.pdf </span>
                <a href="#">Download</a>
              </li>
            </ul>
          </div>
        </div>
     </main>
    )
  }
};

ClientDetails.propTypes = {
  getClient: React.PropTypes.func.isRequired
}

export default ClientDetails;