import { combineReducers } from 'redux';
import portfolioAppState from './portfolioReducer';

const rootReducer = combineReducers({
  portfolioAppState
});

export default rootReducer;
