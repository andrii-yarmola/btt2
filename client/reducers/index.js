import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login';
import auth from './auth'

const rootReducer = combineReducers({
	login,
	auth,
	routing: routerReducer
});

export default rootReducer;
