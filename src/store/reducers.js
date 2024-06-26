import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT_FULFILLED,
  ADVERTS_LOADED_PENDING,
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED,
  // ADVERT_DETAIL_PENDING,
  ADVERT_DETAIL_FULFILLED,
  // ADVERT_DETAIL_REJECTED,
  ADVERT_DELETED_FULFILLED,
  // ADVERT_NEW_PENDING,
  ADVERT_NEW_FULFILLED,
  // ADVERT_NEW_REJECTED,
  TAGS_LOADED_PENDING,
  TAGS_LOADED_FULFILLED,
  TAGS_LOADED_REJECTED,
  UI_RESET_ERROR,
} from './types'


export const defaultState = {
  auth: false,
  adverts: {
    loaded: false,
    data: []
  },
  tags: [],
  ui: {
    pending: false,
    error: null
  }
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
      return true;
    case AUTH_LOGOUT_FULFILLED:
      return false;
    default:
      return state;
  }
};

export function adverts(state = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_FULFILLED:
      return { loaded: true, data: action.payload };
    case ADVERT_DETAIL_FULFILLED:
      return { ...state, data: [action.payload] };
    case ADVERT_NEW_FULFILLED:
      return { ...state, data: [...state.data, action.payload] };
    case ADVERT_DELETED_FULFILLED:
      return {
        ...state,
        data: state.data.filter(advert => advert.id !== action.payload),
      };
    default:
      return state;
  }
}


export function tags(state = defaultState.tags, action) {
  switch (action.type) {
    case TAGS_LOADED_FULFILLED:
      return action.payload;
    default:
      return state;
  };
}


export function ui(state = defaultState.ui, action) {
  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }
  if (action.error) {
    return { ...state, pending: false, error: action.payload };
  }
  if (action.type.endsWith('/pending')) {
    return { ...state, pending: true, error: null };
  }
  if (action.type.endsWith('/fulfilled')) {
    return { ...state, pending: false, error: null };
  }

  return state;
}