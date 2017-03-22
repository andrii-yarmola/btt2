import React from 'react';
import classnames from 'classnames';
import TableBody from './tableBody'
import verifyAuthToken from '../../../utils/verifyAuthToken'

class ClientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isTableLoaded: false,
      tableData: [],
      activeFiler: 'name', // name , email, phone, date, type
      filerDirectionUp: true // desc : true; asc : false
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadTable = this.loadTable.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
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
  
  filterChanged(e) {
    const incFilter = e.target.dataset.filter;
    const { filerDirectionUp } = this.state;
    if (incFilter === this.state.activeFiler) {
      this.setState({ filerDirectionUp: !filerDirectionUp });
    } else 
    this.setState({ filerDirectionUp: true, activeFiler: incFilter });
  }
  
  loadTable() {
    this.setState({ isTableLoaded: false});
    this.props.getClients(this.state)
    .then(
      res => this.setState({ isTableLoaded: true , tableData: res.data.data}),
      err => this.setState({ errors: err.response })
    )
  }

  componentWillMount() {
    this.loadTable();
  }

  render() {
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
                <th
                  className={classnames("cell02", {"active" : this.state.activeFiler==="name"})}
                  onClick={this.filterChanged}
                  data-filter="name">
                  Client Name
                  <span className={classnames("sort-desc", {"active" : this.state.filerDirectionUp && this.state.activeFiler==="name"})}>&#9650;</span>
                  <span className={classnames("sort-asc", {"active" : !this.state.filerDirectionUp && this.state.activeFiler==="name"})}>&#9660;</span>
                </th>
                <th
                  className={classnames("cell03", {"active" : this.state.activeFiler==="email"})}
                  onClick={this.filterChanged}
                  data-filter="email">
                  Email 
                  <span className={classnames("sort-desc", {"active" : this.state.filerDirectionUp && this.state.activeFiler==="email"})}>&#9650;</span>
                  <span className={classnames("sort-asc", {"active" : !this.state.filerDirectionUp && this.state.activeFiler==="email"})}>&#9660;</span>
                </th>
                <th
                  className={classnames("cell04", {"active" : this.state.activeFiler==="phone"})}
                  onClick={this.filterChanged}
                  data-filter="phone">
                  Phone
                  <span className={classnames("sort-desc", {"active" : this.state.filerDirectionUp && this.state.activeFiler==="phone"})}>&#9650;</span>
                  <span className={classnames("sort-asc", {"active" : !this.state.filerDirectionUp && this.state.activeFiler==="phone"})}>&#9660;</span>
                </th>
                <th
                  className={classnames("cell05", {"active" : this.state.activeFiler==="date"})}
                  onClick={this.filterChanged}
                  data-filter="date">
                  Date added
                  <span className={classnames("sort-desc", {"active" : this.state.filerDirectionUp && this.state.activeFiler==="date"})}>&#9650;</span>
                  <span className={classnames("sort-asc", {"active" : !this.state.filerDirectionUp && this.state.activeFiler==="date"})}>&#9660;</span>
                </th>
                 <th
                  className={classnames("cell06", {"active" : this.state.activeFiler==="type"})}
                  onClick={this.filterChanged}
                  data-filter="type">
                  Type
                  <span className={classnames("sort-desc", {"active" : this.state.filerDirectionUp && this.state.activeFiler==="type"})}>&#9650;</span>
                  <span className={classnames("sort-asc", {"active" : !this.state.filerDirectionUp && this.state.activeFiler==="type"})}>&#9660;</span>
                </th>
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