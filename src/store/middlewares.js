export const failureRedirects = (router, redirectsMap) => _store => next => action => {
  const result = next(action);

  // Redundante. Hago return result al final de la función
  // if (!action.error){
  //   return result;
  // }

  if (action.error) {
    const redirect = redirectsMap[action.payload.statusCode];
    if (redirect) {
      router.navigate(redirect);
    }
  }

  return result;
};