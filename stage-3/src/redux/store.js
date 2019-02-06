import PromiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';

export default createStore(reducer, applyMiddleware(PromiseMiddleware()));
