import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  listByCompanyReducer,
  ListReducer,
  userReducer,
  allotUserReducer,
} from './reducers/userReducers';
import { addCompanyReducer, deleteReducer } from './reducers/companyReducers';

const reducer = combineReducers({
  addCompany: addCompanyReducer,
  user: userReducer,
  delete: deleteReducer,
  list: ListReducer,
  listByCompany: listByCompanyReducer,
  allotUser: allotUserReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
