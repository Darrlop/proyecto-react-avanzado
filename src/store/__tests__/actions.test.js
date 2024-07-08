import {
  advertsLoadedFulfilled,
  advertsLoadedRejected,
  authLogin,
  authLoginPending,
  authLoginFulfilled,
  authLoginRejected
} from '../actions';

import {
  ADVERTS_LOADED_FULFILLED,
  ADVERTS_LOADED_REJECTED
} from '../types';

// TESTS SÍNCRONOS -----------------------------

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

// TESTS ASÍNCRONOS -----------------------------

describe('authLogin', () => {
  const credentials = 'credentials';
  const action = authLogin(credentials);
  const redirectUrl = 'redirectUrl';
  const dispatch = jest.fn();
  const services = { auth: {} };
  const router = {
    state: { location: { state: { from: redirectUrl } } },
    navigate: jest.fn()
  };

  test('when login resolves, should follow the login flow', async () => {
    services.auth.login = jest.fn().mockResolvedValue();

    await action(dispatch, undefined, { services, router });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, authLoginPending()); //1 -> 1ª llamada
    expect(services.auth.login).toHaveBeenCalledWith(credentials);
    expect(dispatch).toHaveBeenNthCalledWith(2, authLoginFulfilled()); //2 -> 2ª llamada
    expect(router.navigate).toHaveBeenCalledWith(redirectUrl, { replace: true });
  });

  test('when login rejects, should follow the error flow', async () => {
    const error = new Error('Login rechazado');
    services.auth.login = jest.fn().mockRejectedValue(error);

    await action(dispatch, undefined, { services, router });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, authLoginPending());
    expect(services.auth.login).toHaveBeenCalledWith(credentials);
    expect(dispatch).toHaveBeenNthCalledWith(2, authLoginRejected(error));
    //Si queremos remarcar explícitamente que NO se llama a router.navigate:
    expect(router.navigate).not.toHaveBeenCalledWith();
  });

});
