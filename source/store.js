import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createReducer from './js/reducers/index.js';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import loggingActions from './js/middlewares/loggingActions.js';

function makeStore() {
  const initialState = {};

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const customMiddlewares = [
    // thunk,
    loggingActions,
  ];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...customMiddlewares)),
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
}
const store = makeStore();

export default store;