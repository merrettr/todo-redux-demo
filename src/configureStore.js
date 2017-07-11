import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './todos';

export default initialState => {
  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  return createStore(reducer, initialState, applyMiddleware(...middleware));
};
