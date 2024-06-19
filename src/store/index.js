import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// posterior
//import * as reducers from './reducers';
import reducer from './reducers';
import * as actionCreators from './actions';

//Cuando lo use 
//const reducer = combineReducers(reducers);

function configureStore() {
  const store = createStore(reducer, composeWithDevTools({ actionCreators }));

  return store
}