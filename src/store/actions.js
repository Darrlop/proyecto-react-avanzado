import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  ADVERTS_LOADED_PENDING,
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED,
  ADVERT_DETAIL_PENDING,
  ADVERT_DETAIL_FULFILLED,
  ADVERT_DETAIL_REJECTED,
  ADVERT_NEW_PENDING,
  ADVERT_NEW_FULFILLED,
  ADVERT_NEW_REJECTED,
  UI_RESET_ERROR
} from './types'

export const authLoginPending = () => ({
  type: AUTH_LOGIN_PENDING,
});

export const authLoginFulfilled = () => ({
  type: AUTH_LOGIN_FULFILLED,
});

export const authLoginRejected = error => ({
  type: AUTH_LOGIN_REJECTED,
  payload: error,
  error: true,
});

//Defino el thunk para login
export const authLogin = credentials => {
  return async function (dispatch, _getState, { services: { auth }, router }) {
    try {
      dispatch(authLoginPending());
      await auth.login(credentials);
      dispatch(authLoginFulfilled());
      const to = router.state.location.state?.from || '/';
      router.navigate(to, { replace: true });
    } catch (error) {
      dispatch(authLoginRejected(error));
      throw error;
    }
  };
};

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});


export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
