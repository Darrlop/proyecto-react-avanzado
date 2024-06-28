export const getIslogged = state => state.auth;
export const getAreAdvertsLoaded = state => state.adverts.loaded;
//export const getAdverts = state => state.adverts.data;
export const getStateAdverts = state => state.adverts.data;
export const getAdvert = advertId => state => getStateAdverts(state).find(advert => advert.id === advertId);

//Función más desplegada
// export function getAdvert(advertId) {
//   return function (state) {
//     const adverts = getAdvert(state);
//     console.log(adverts)
//     return adverts.find(function (advert) {
//       return advert.id === advertId.toString();
//     });
//   };
// }



export const getUi = state => state.ui;