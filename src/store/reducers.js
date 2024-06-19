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
  // ADVERT_NEW_REJECTED
} from './types'
import { func } from 'prop-types';


//BALIZA falta adverts y ui
export const defaultState = {
  auth: false,
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
export default function reducer(state = defaultState, action) {
  return {
    aut: auth(state.auth, action)
  }
}