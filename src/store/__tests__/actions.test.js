import {
  advertsLoadedFulfilled,
  advertsLoadedRejected
} from '../actions';

import {
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED
} from '../types';

describe('advertsLoadedFulfilled', () => {
  test('should return an "ADVERTS_LOADED_FULFILLED" action', () => {

    const adverts = "Listado de anuncios/adverts";
    const expectedAction = {
      type: ADVERTS_LOADED_FULFILLED,
      payload: adverts
    };

    const action = advertsLoadedFulfilled(adverts);
    expect(action).toEqual(expectedAction);

  });
});

describe('advertsLoadedRejected', () => {
  test('should return an "ADVERTS_LOADED_REJECTED" action ', () => {

    const error = "Error de carga de anuncios/adverts";
    const expectedAction = {
      type: ADVERTS_LOADED_REJECTED,
      payload: error,
      error: true,
    };

    const action = advertsLoadedRejected(error);
    expect(action).toEqual(expectedAction);

  });
});
