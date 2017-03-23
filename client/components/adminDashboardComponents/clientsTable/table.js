import React from 'react';
import classnames from 'classnames';
import TableBody from './tableBody';
import TableHead from './tableHead';
import verifyAuthToken from '../../../utils/verifyAuthToken';
import Pagination from 'rc-pagination';
import Select from 'rc-select';
import locale from './locale';

class ClientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isTableLoaded: false,
      tableData: [],
      pagesCount: 100,
      pageSize: 10,
      currentPage: 1,
      activeFiler: 'name', // name , email, phone, date, type
      filerDirectionUp: true, // desc : true; asc : false
      search: ''
    };
    
    this.onChange = this.onChange.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.paginationOnChange = this.paginationOnChange.bind(this);
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value }, this.loadTable);
  }
  
  paginationOnChange(current, pageSize){
    if (current !== this.state.currentPage) {
      this.setState({ currentPage: current }, this.loadTable);
    } 
  }
  
  onShowSizeChange(current, pageSize){
    if (current !== this.state.currentPage || pageSize !== this.state.pageSize) {
      this.setState({ currentPage: current, pageSize: pageSize }, this.loadTable);
    } 
  }
  
  filterChanged(e) {
    const incFilter = e.target.dataset.filter;
    const { filerDirectionUp } = this.state;
    if (incFilter === this.state.activeFiler) {
      this.setState({ filerDirectionUp: !filerDirectionUp }, this.loadTable);
    } else 
    this.setState({ filerDirectionUp: true, activeFiler: incFilter }, this.loadTable);
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
              <input 
                type="text"
                className="form-control search-input"
                placeholder="Search for client name ..."
                onChange={this.onChange}
                name="search"
              />
            </div>
          </div>
        </div>
        <div className="table-holder table-responsive">
          <table className="table clients-table">
            <TableHead 
              activeFiler={this.state.activeFiler}
              filterChanged={this.filterChanged}
              filerDirectionUp={this.state.filerDirectionUp}
            />
            <TableBody tableData={this.state.tableData}/>
          </table>
        </div>
        <div className="pagination-block">
            <div className="container container-narrow">
              <Pagination 
                onChange={this.paginationOnChange}
                onShowSizeChange={this.onShowSizeChange}
                selectComponentClass={Select}
                className="pagination"
                showSizeChanger
                pageSizeOptions={['10', '15', '20']}
                locale={locale}
                total={this.state.pagesCount}
              />
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