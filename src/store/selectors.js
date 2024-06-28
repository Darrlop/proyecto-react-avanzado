export const getIslogged = state => state.auth;
export const getAreAdvertsLoaded = state => state.adverts.loaded;
//export const getAdverts = state => state.adverts.data;
export const getStateAdverts = state => state.adverts.data;
export const getStateAdvert = advertId => state => getStateAdverts(state).find(advert => advert.id === advertId);

export const getUi = state => state.ui;