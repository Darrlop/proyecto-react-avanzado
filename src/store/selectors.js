export const getIslogged = state => state.auth;
export const getAreAdvertsLoaded = state => state.adverts.loaded;
//export const getAdverts = state => state.adverts.data;
export const getStateAdverts = state => state.adverts.data;
export const getAdvert = advertId => state => getStateAdverts(state).find(advert => advert.id === advertId);

export const getAreTagsLoaded = state => getTags(state).length > 0;
export const getTags = state => state.tags;

export const getUi = state => state.ui;