import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import * as reducers from './reducers';

import * as actionCreators from './actions';

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
  //más adelante
  //const store = createStore(reducer, composeWithDevTools({ actionCreators }));
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools({ actionCreators })(),
  );
  return store;
}