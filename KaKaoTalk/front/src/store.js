import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import reduxActions from './redux-actions';
import reduxActions from './reducer';

const logger = createLogger();
export default createStore(reduxActions,applyMiddleware(logger));