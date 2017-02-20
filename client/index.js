import React from 'react';
import { render } from 'react-dom';

import LoginPage from './components/loginPage/loginPage';
import App from './App';

import './bootstrap.css';
import './index.css';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

function isUserSignedIn(state) {
  return state.auth.getIn(['user', 'isSignedIn']);
}

function requireAuth(nextState, transition, cb) {
  setTimeout(() => {
    if (!isUserSignedIn(store.getState())) {
      transition('/');
    }
    cb();
  }, 0);
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginPage}></IndexRoute>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/some" component={LoginPage} onEnter={requireAuth}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));