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
      pagesCount: 0,
      pageSize: 10,
      currentPage: 1,
      activeFilter: 'name', // name , email, phone, date, type
      filterDirectionUp: true, // desc : true; asc : false
      errors: ''
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
    const { filterDirectionUp } = this.state;
    if (incFilter === this.state.activeFilter) {
      this.setState({ filterDirectionUp: !filterDirectionUp }, this.loadTable);
    } else 
    this.setState({ filterDirectionUp: true, activeFilter: incFilter }, this.loadTable);
  }
  
  loadTable() {
    this.setState({ isTableLoaded: false});
    this.props.getClients(this.state)
    .then(
      res => this.setState({ isTableLoaded: true , tableData: res.data.data, pagesCount: res.data.count}),
      err => this.setState({ errors: res.errors})
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
              activeFilter={this.state.activeFilter}
              filterChanged={this.filterChanged}
              filterDirectionUp={this.state.filterDirectionUp}
            />
            <TableBody
              tableData={this.state.tableData}
              isTableLoaded={this.state.isTableLoaded}
              startNumber={this.state.pageSize * (this.state.currentPage - 1)}
            />
          </table>
          {(!this.state.tableData.length) && <div className='noFound'> No clients found ... </div>}
        </div>
        <div className="pagination-block">
            <div className="container container-narrow">
              <Pagination 
                onChange={this.paginationOnChange}
                onShowSizeChange={this.onShowSizeChange}
                selectComponentClass={Select}
                className={classnames("pagination", {"hidden" : this.state.pagesCount<2})}
                showSizeChanger
                pageSizeOptions={['10', '15', '20']}
                locale={locale}
                total={this.state.pagesCount * this.state.pageSize}
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