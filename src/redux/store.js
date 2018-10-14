import { createStore, combineReducers } from 'redux';

import gameSt from './reducers/reduser';

const RootReducer = combineReducers({ gameSt });

export default (process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStore(rootReducer));

  