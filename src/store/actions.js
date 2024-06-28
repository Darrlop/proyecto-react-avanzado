import { getAdvert, getAreAdvertsLoaded, getAreTagsLoaded } from './selectors';
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
  ADVERT_DELETE_PENDING,
  ADVERT_DELETE_FULFILLED,
  ADVERT_DELETE_REJECTED,
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


export const advertsLoadedPending = () => ({
  type: ADVERTS_LOADED_PENDING,
});
export const advertsLoadedFulfilled = adverts => ({
  type: ADVERTS_LOADED_FULFILLED,
  payload: adverts
});
export const advertsLoadedRejected = error => ({
  type: ADVERTS_LOADED_REJECTED,
  payload: error,
  error: true,
});

//Defino el thunk para anuncios
export const loadAdverts = () => {
  return async function (dispatch, getState, { services: { adverts } }) {

    //Detecto si hay anuncios ya cargados para no repetir operación
    const state = getState();
    if (getAreAdvertsLoaded(state)) {
      return;
    }

    try {
      dispatch(advertsLoadedPending());
      const loadedAdverts = await adverts.getAdverts();
      dispatch(advertsLoadedFulfilled(loadedAdverts));
    } catch (error) {
      dispatch(advertsLoadedRejected(error));
      throw error;
    }
  };
};

export const advertDetailPending = () => ({
  type: ADVERT_DETAIL_PENDING,
});
export const advertDetailFulfilled = advert => ({
  type: ADVERT_DETAIL_FULFILLED,
  payload: advert
});
export const advertDetailRejected = error => ({
  type: ADVERT_DETAIL_REJECTED,
  payload: error,
  error: true,
});

//Defino el thunk para una anuncio concreto
export const loadAdvert = advertId => {
  return async function (dispatch, getState, { services: { adverts } }) {
    // if (getAdvert(advertId)(getState())) {
    //   return;
    // }
    try {
      dispatch(advertsLoadedPending());
      const loadedAdvertOne = await adverts.getAdverts(advertId);
      dispatch(advertDetailFulfilled(loadedAdvertOne));
    } catch (error) {
      dispatch(advertDetailRejected(error));
      throw error;
    }


  };
};


export const advertsDeletedRequest = () => ({
  type: ADVERT_DELETE_PENDING,
});
export const advertsDeletedSuccess = advert => ({
  type: ADVERT_DELETE_FULFILLED,
  payload: advert
});
export const advertsDeletedFailure = error => ({
  type: ADVERT_DELETE_REJECTED,
  error: true,
  payload: error
});

export const deleteAdvert = advertId => {
  return async function (dispatch, _getState, { services: { adverts }, router }) {
    try {
      dispatch(advertsDeletedRequest());
      await adverts.deleteAdvert(advertId);
      dispatch(advertsDeletedSuccess(advertId));
      router.navigate(`/adverts`);
    } catch (error) {
      dispatch(advertsDeletedFailure(error));
    }
  };
};


export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
