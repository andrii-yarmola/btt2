import React from 'react';
import ClientsTable from '../adminDashboardComponents/clientsTable/table';
import PaymentForm from '../paymentForm/paymentForm';
import OrdersTable from '../adminDashboardComponents/ordersTable/table';

class DashboardPage extends React.Component {
  render() {
    const { getClients, getOrders, generatePaymentLink } = this.props;
    return (
      <main className="main">
        <div className="content">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="payment">
              <PaymentForm generatePaymentLink={generatePaymentLink}/>
            </div>
            <div role="tabpanel" className="tab-pane" id="orders">
              <OrdersTable getOrders={getOrders}/>
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