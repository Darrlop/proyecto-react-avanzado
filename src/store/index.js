import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk, withExtraArgument } from "redux-thunk";

import * as reducers from './reducers';
import * as actionCreators from './actions';
//import * as auth from '../pages/auth/service';
import * as auth from '../components/auth/service';

//import * as tweets from '../pages/tweets/service';
//import { failureRedirects, logger, timestamp } from './middleware';


const reducer = combineReducers(reducers);

// composeEnhancers para habilitar devtools
const composeEnhancers = composeWithDevTools({ actionCreators });


export default function configureStore(preloadedState, { router }) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        //withExtraArgument({ services: { auth, tweets }, router }),  <- luego hay que meter adverts en vez de tweets
        withExtraArgument({ services: { auth }, router }),
        // failureRedirects(router, {
        //   401: '/login',
        //   404: '/404',
        // }),
      ),
    ),
  );


  return store;
}