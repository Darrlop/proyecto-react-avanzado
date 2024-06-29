import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { withExtraArgument } from "redux-thunk";

import * as reducers from './reducers';
import * as actionCreators from './actions';
import * as auth from '../components/auth/service';
import * as adverts from '../components/adverts/service'

//import { failureRedirects } from './middleware';


const reducer = combineReducers(reducers);

// composeEnhancers para habilitar devtools
const composeEnhancers = composeWithDevTools({ actionCreators });


export default function configureStore(preloadedState, { router }) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        withExtraArgument({ services: { auth, adverts }, router }),
        // failureRedirects(router, {
        //   401: '/login',
        //   404: '/404',
        // }),
      ),
    ),
  );


  return store;
}