import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(logger)
);

export default store;