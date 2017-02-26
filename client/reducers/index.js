import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reactTasks from './reactTasks';
import commercyTasks from './commercyTasks';
import login from './login';
import auth from './auth'

const rootReducer = combineReducers({
	reactTasks,
	commercyTasks,
	login,
	auth,
	routing: routerReducer
});

export default rootReducer;
