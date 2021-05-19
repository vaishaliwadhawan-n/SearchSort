import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//thunk is used to add midleware to our project
//it does not allow the action creator to return -
//a action by itself but return a function which will eventually dispatch an action.
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    users: usersReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
