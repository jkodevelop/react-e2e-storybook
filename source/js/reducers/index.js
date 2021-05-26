import { combineReducers } from 'redux';
import evenCounter from './evenCounter.js';

// Define the reducers that will always be present in the application
const staticReducers = {
  evenCounter,
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}