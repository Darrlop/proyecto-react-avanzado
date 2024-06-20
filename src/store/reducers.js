import { combineReducers } from 'redux';
import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  // ADVERTS_LOADED_PENDING,
  // ADVERTS_LOADED_FULFILLED,
  // ADVERTS_LOADED_REJECTED,
  // ADVERT_DETAIL_PENDING,
  // ADVERT_DETAIL_FULFILLED,
  // ADVERT_DETAIL_REJECTED,
  // ADVERT_NEW_PENDING,
  // ADVERT_NEW_FULFILLED,
  // ADVERT_NEW_REJECTED,
  UI_RESET_ERROR
} from './types'
import { func } from 'prop-types';


//BALIZA falta adverts y ui
export const defaultState = {
  auth: false,
  ui: {
    pending: false,
    error: null,
  }
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
};

//BALIZA falta añadir los advets y  luego refactorizar con combineReducers
// export default function reducer(state = defaultState, action) {
//   return {
//     aut: auth(state.auth, action)
//   }
// }


export function ui(state = defaultState.ui, action) {
  switch (action.type) {
    case UI_RESET_ERROR:
      return { ...state, error: null };
    case AUTH_LOGIN_PENDING:
      return { ...state, pending: true };
    case AUTH_LOGIN_FULFILLED:
      return { ...state, pending: false, error: null };
    case AUTH_LOGIN_REJECTED:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}