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
      filePath1:'',
      filePath2:'',
      filePath3:'',
      fileName1:'',
      fileName2:'',
      fileName3:''
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
        created_at: res.data.data.created_at,
        message: res.data.data.message,
        filePath1: res.data.data.filePath1,
        filePath2: res.data.data.filePath2,
        filePath3: res.data.data.filePath3,
        fileName1: res.data.data.fileName1,
        fileName2: res.data.data.fileName2,
        fileName3: res.data.data.fileName3
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
                  {this.state.date && this.state.time && 
                    <div className="form-row form-row-static">
                      <label>Meeting scheduled on</label>
                      <span className="form-control-static">{this.state.date}</span>
                      <label>at</label>
                      <span className="form-control-static">{this.state.time} EST</span>
                    </div>
                  }
                  <div className="form-row form-row-static">
                    <label>Type of contact</label>
                    <span className="form-control-static">{this.state.type}</span>
                  </div>
                  <div className="form-row form-row-static">
                    <label>Added on</label>
                    <span className="form-control-static form-control-static-gray">{this.state.created_at}</span>
                  </div>
                </div>
              </div>
              {this.state.message &&
                <div className="form-row form-row-static form-row-text">
                  <label>Message from the client:</label>
                  <div className="form-text">
                    <p>{this.state.message}</p>
                  </div>
                </div>
              }
            </form>
          </div>
        </div>
        <div className="download-block">
          <div className="container container-narrow">
            <ul className="download-list">
              {this.state.fileName1 && this.state.filePath1 &&
                <li>
                  <span>{this.state.fileName1}</span>
                  <a href={`/uploads/${this.state.filePath1}`}>Download</a>
                </li>
              }
              {this.state.fileName2 && this.state.filePath2 &&
                <li>
                  <span>{this.state.fileName2}</span>
                  <a href={`/uploads/${this.state.filePath2}`}>Download</a>
                </li>
              }
              {this.state.fileName3 && this.state.filePath3 &&
                <li>
                  <span>{this.state.fileName3}</span>
                  <a href={`/uploads/${this.state.filePath3}`}>Download</a>
                </li>
              }
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