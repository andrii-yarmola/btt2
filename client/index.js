import React from 'react';
import { render } from 'react-dom';

import LoginPage from './components/loginPage/loginPage';
import SignupPage from './components/signupPage/signupPage';
import WellcomePage from './components/wellcomepage/wellcomepage';
import App from './App';

import setAuthToken from './utils/setAuthToken'

import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/actionCreators';

import './bootstrap.css';
import './index.css';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

function isUserSignedIn(state) {
  // return state.auth.getIn(['user', 'isSignedIn']);
}

function requireAuth(nextState, transition, cb) {
  setTimeout(() => {
    if (!isUserSignedIn(store.getState())) {
      transition('/');
    }
    cb();
  }, 0);
}

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={WellcomePage}></IndexRoute>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/dashboard" component={WellcomePage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));