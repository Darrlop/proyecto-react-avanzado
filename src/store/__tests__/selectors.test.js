import { getStateAdverts, getAreAdvertsLoaded } from "../selectors";

describe('getStateAdverts', () => {
  //const state = { adverts: {data: [{id: '1'}]} }
  const advertId = '1';
  const advertName = 'Anuncio 1';
  const adverts = [{ id: advertId, name: advertName }];
  const state = { adverts: { data: adverts } }

  test('shold return adverts ', () => {
    expect(getStateAdverts(state)).toBe(adverts);
  });
});

describe('getAreAdvertsLoaded', () => {
  const state = { adverts: { loaded: true } }

  test('should return true', () => {
    expect(getAreAdvertsLoaded(state)).toBe(true);
  });
});
