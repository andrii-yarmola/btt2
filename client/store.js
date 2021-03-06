import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
	
};

const store = createStore(
	rootReducer, 
	defaultState,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
