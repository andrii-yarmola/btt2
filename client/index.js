import React from 'react';
import { render } from 'react-dom';

import LoginPage from './components/loginPage/loginPage';
import SignupPage from './components/signupPage/signupPage';
import WellcomePage from './components/wellcomePage/wellcomePage';
import DashboardPage from './components/dashboardPage/dashboardPage';
import AdminMain from './components/adminMain/adminMain';
import App from './App';
import ClientDetails from './components/clientDetails/clientDetails';
import SuccessPage from './components/successPage/successPage';
import CancelPage from './components/cancelPage/cancelPage';

import verifyAuthToken from './utils/verifyAuthToken';

import requireAuth from './utils/requireAuth';
import requireUnAuth from './utils/requireUnAuth';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// styles for admin page
import './bootstrap-a.css';
import './index.css';

// styles and JS for client page
// import './bootstrap.css';
// import './main.css';
// import './js.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={WellcomePage}></IndexRoute>
        <Route path="server" component={AdminMain}>
          <IndexRoute component={LoginPage}></IndexRoute>
          <Route path="login" component={requireUnAuth(LoginPage)}></Route>
          <Route path="signup" component={requireUnAuth(SignupPage)}></Route>
          <Route path="dashboard" component={requireAuth(DashboardPage)}></Route>
          <Route path="clients/:id" component={requireAuth(ClientDetails)}></Route>
          <Route path="success" component={SuccessPage}></Route>
          <Route path="cancelled" component={CancelPage}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
)

verifyAuthToken().then(
  result => {
    render(router, document.getElementById('app'));
  }
);

