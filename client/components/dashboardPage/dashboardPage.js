import React from 'react';
import ClientsTable from '../adminDashboardComponents/clientsTable/table';

class DashboardPage extends React.Component {
  render() {
    const { getClients } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="payment">
              <div className="container container-narrow">
                 THIS IS payment TAB
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="orders">
                 THIS IS orders TAB
            </div>
            <div role="tabpanel" className="tab-pane" id="clients">
                <ClientsTable getClients={getClients}/>
            </div>
          </div>
        </div>
      </main>
    )
  }
};

export default DashboardPage;