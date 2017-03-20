import React from 'react';
import classnames from 'classnames';
import TableBody from './tableBody'

class ClientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isTableLoaded: false,
      errors: {},
      tableData: []
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    if (this.isValid()) {
      console.log('submited');
    }
  }

  componentWillMount() {
    this.setState({ isTableLoaded: false});
    this.props.getClients(this.state).then(
      (res) => {
        this.setState({ isTableLoaded: true , tableData: res.data.data});
      },
      (err) => this.setState({ errors: err.response.data })
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <form className="clients-form" >
        <div className="container container-narrow">
          <div className="search-holder">
            <h1>Clients</h1>
            <div className="input-holder">
              <input type="text" className="form-control search-input" placeholder="Search for client name ..."/>
              <input type="submit" className="search-btn" value="Search"/>
            </div>
          </div>
        </div>
        <div className="table-holder table-responsive">
          <table className="table clients-table">
            <thead>
              <tr>
                <th className="cell01">...</th>
                <th className="cell02">Client Name
                  <a href="#" className="sort-desc active">&#9650;</a>
                  <a href="#" className="sort-asc">&#9660;</a>
                </th>
                <th className="cell03 active">Email 
                  <a href="#" className="sort-desc">&#9650;</a>
                  <a href="#" className="sort-asc active">&#9660;</a>
                </th>
                <th className="cell04">Phone</th>
                <th className="cell05">Date added</th>
                <th className="cell06">Type</th>
              </tr>
            </thead>
            <TableBody tableData={this.state.tableData}/>
          </table>
        </div>
        <div className="pagination-block">
            <div className="container container-narrow">
              <div className="entries-block">
                <span>Show</span>
                <span className="select-holder">
                  <select className="count">
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                </span>
              </div>
                <ul className="pagination">
                  <li>
                    <a className="nav-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&lt; Previous </span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li className="active"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><span>...</span></li>
                  <li><a href="#">21</a></li>
                  <li>
                    <a className="nav-link link-next" href="#" aria-label="Next">
                      <span aria-hidden="true">Next &gt;</span>
                    </a>
                  </li>
                </ul>
            </div>
        </div>
      </form>
    )
  }
};

ClientsTable.propTypes = {
  getClients: React.PropTypes.func.isRequired
}

export default ClientsTable;