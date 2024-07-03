import {
  authLoginFulfilled,
  authLogout,
  authLogoutFulfilled
} from "../actions";
import {
  auth,
  defaultState
} from "../reducers";

describe('auth', () => {

  test('should manage "AUTH_LOGIN_FULFILLED" action', () => {
    // const state = {
    //   auth: false,
    //   adverts: {
    //     loaded: false,
    //     data: []
    //   },
    //   tags: [],
    //   ui: {
    //     pending: false,
    //     error: null
    //   }
    // };
    const state = defaultState.auth;
    const action = authLoginFulfilled();
    expect(auth(state, action)).toBe(true);
  });

  test('should manage "AUTH_LOGOUT_FULFILLED" action', () => {
    const state = defaultState.auth;
    const action = authLogoutFulfilled();
    expect(auth(state, action)).toBe(false);
  });

  test('should manage "ANY" action ', () => {  // para el caso del default
    const state = defaultState.auth;
    const action = { type: 'ANY' };
    expect(auth(state, action)).toBe(state)
  });

  test('should manage "ANY" action when state is not defined', () => {
    const state = undefined;
    const action = { type: 'ANY' };
    expect(auth(state, action)).toBe(defaultState.auth);


  });
});