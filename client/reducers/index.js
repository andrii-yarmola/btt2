import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reactTasks from './reactTasks';
import commercyTasks from './commercyTasks';
import login from './login';

const rootReducer = combineReducers({
	reactTasks,
	commercyTasks,
	login,
	routing: routerReducer
});

export default rootReducer;
