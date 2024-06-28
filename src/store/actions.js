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
  ADVERT_DELETED_PENDING,
  ADVERT_DELETED_FULFILLED,
  ADVERT_DELETED_REJECTED,
  TAGS_LOADED_PENDING,
  TAGS_LOADED_FULFILLED,
  TAGS_LOADED_REJECTED,
  UI_RESET_ERROR
} from './types'

import { getAdvert, getAreAdvertsLoaded, getAreTagsLoaded } from './selectors';
import { createAdvert } from '../components/adverts/service';


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
    if (getAdvert(advertId)(getState())) {
      return;
    }
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


export const advertsDeletedPending = () => ({
  type: ADVERT_DELETED_PENDING,
});
export const advertsDeletedFulfilled = advert => ({
  type: ADVERT_DELETED_FULFILLED,
  payload: advert
});
export const advertsDeletedRejected = error => ({
  type: ADVERT_DELETED_REJECTED,
  error: true,
  payload: error
});

export const deleteAdvert = advertId => {
  return async function (dispatch, _getState, { services: { adverts }, router }) {
    try {
      dispatch(advertsDeletedPending());
      await adverts.deleteAdvert(advertId);
      dispatch(advertsDeletedFulfilled(advertId));
      router.navigate(`/adverts`);
    } catch (error) {
      dispatch(advertsDeletedRejected(error));
    }
  };
};


export const advertNewPending = () => ({
  type: ADVERT_NEW_PENDING,
});
export const advertNewFulfilled = advert => ({
  type: ADVERT_NEW_FULFILLED,
  payload: advert,
});
export const advertNewRejected = error => ({
  type: ADVERT_NEW_REJECTED,
  error: true,
  payload: error,
});

export const createNewAdvert = newAdvert => {
  return async function (dispatch, _getState, { services: { adverts }, router }) {
    try {
      dispatch(advertNewPending());
      const advert = await adverts.createAdvert(newAdvert);
      dispatch(advertNewFulfilled(advert));
      //router.navigate(`/adverts/${advert.id}`);
      router.navigate(`/adverts`);
    } catch (error) {
      dispatch(advertNewRejected(error));
    }
  };
};


export const tagsLoadedPending = () => ({
  TAGS_LOADED_PENDING
});
export const tagsLoadedFulfilled = tags => ({
  type: TAGS_LOADED_FULFILLED,
  payload: tags,
});
export const tagsLoadedRejected = error => ({
  type: TAGS_LOADED_REJECTED,
  payload: error,
  error: true,
});

export const loadTags = () => {
  return async function (dispatch, getState, { services: { adverts } }) {
    if (getAreTagsLoaded(getState())) {
      return;
    }
    const tags = await adverts.getTags();
    dispatch(tagsLoadedFulfilled(tags));
  };
};


export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
