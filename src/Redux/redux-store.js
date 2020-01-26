import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dialogsPageReducer } from './dialogsPageReducer';
import { profilePageReducer } from './profilePageReducer';
import { friendsPageReducer } from './friendsPageReducer';
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  friendsPage: friendsPageReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
