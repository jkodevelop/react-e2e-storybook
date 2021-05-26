import { createStore, combineReducers, applyMiddleware } from 'redux';
import createReducer from './js/reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import loggingActions from './js/middlewares/loggingActions.js';

function makeStore() {
  const initialState = {};

  const customMiddlewares = [
    // thunk,
    loggingActions,
  ];

  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(
      applyMiddleware(...customMiddlewares),
      // other store enhancers if any
    ),
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./js/reducers/index.js', () => {
      try {
        store.replaceReducer(createReducer(store.asyncReducers));
      } catch (error) {
        console.error(chalk.red(`==> Reducer hot reloading error ${error}`));
      }
    });
  }

  return store;
}
const store = makeStore();

export default store;