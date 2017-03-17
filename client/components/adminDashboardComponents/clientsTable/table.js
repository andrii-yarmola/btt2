import React from 'react';

const ClientsTable = () => {
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
                <tbody>
                  <tr>
                    <td className="cell01">1</td>
                    <td className="cell02"><a href="#">Aqorn</a></td>
                    <td className="cell03"><a href="mailto:adam@aqorn.com">adam@aqorn.com</a></td>
                    <td className="cell04"><a href="callto:+010012340056700">+01 00 12340056700</a></td>
                    <td className="cell05">Feb 01 2016</td>
                    <td className="cell06">Request</td>
                  </tr>
                  <tr>
                    <td className="cell01">2</td>
                    <td className="cell02"><a href="#">Batelco</a></td>
                    <td className="cell03"><a href="mailto:long.name.batelco.client.email@batelco.com">long.name.batelco.client.email@batelco.com</a></td>
                    <td className="cell04"><a href="callto:+010012340056700">+01 00 12340056700</a></td>
                    <td className="cell05">Feb 04 2016</td>
                    <td className="cell06">Schedule</td>
                  </tr>
                </tbody>
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
    );
};

export default ClientsTable;