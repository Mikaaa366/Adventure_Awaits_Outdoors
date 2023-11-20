/* eslint-disable no-undef */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';

const subreducers = {
  products: productsReducer,
  cart: cartReducer
};

const reducer = combineReducers(subreducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
