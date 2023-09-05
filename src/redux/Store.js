// store.js
import { createStore, combineReducers } from 'redux';
import contactReducer from './ContactReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer);

export default store;
