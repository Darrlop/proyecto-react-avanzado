import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

import * as reducers from './reducers';
import * as actionCreators from './actions';

const reducer = combineReducers(reducers);

// composeEnhancers para habilitar devtools
const composeEnhancers = composeWithDevTools({ actionCreators });

export default function configureStore(preloadedState) {
  //más adelante
  //const store = createStore(reducer, composeWithDevTools({ actionCreators }));
  const store = createStore(
    reducer,
    preloadedState,
    //composeWithDevTools({ actionCreators })(),
    composeEnhancers(applyMiddleware(thunk)),

  );
  return store;
}