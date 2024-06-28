import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
//import { getAdvert, deleteAdvert } from '../service';
import { getStateAdvert } from '../../../store/selectors';

import navigateAfterRequestError from '../../../utils/navigateAfterRequestError';
import { loadAdvert } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function AdvertPage() {
  const { advertId } = useParams();

  const advert = useSelector(getStateAdvert(advertId));
  const { isLoading } = useSelector(getUi);
  const dispatch = useDispatch();

  //Quitar?
  //const [advert, setAdvert] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getAdvert(advertId)
  //     .then(advert => {
  //       setAdvert(advert);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       setIsLoading(false);
  //       navigateAfterRequestError(error, navigate);
  //     });
  // }, [advertId, navigate]);

  useEffect(() => {
    dispatch(loadAdvert(advertId));
  }, [dispatch, advertId]);

  //Añadir esto para sustituir el parrafo de docutemporal
  // const handleDelete = () => {
  //   deleteAdvert(advertId);
  // };

  //DOcu temporal
  // const handleDelete = async () => {
  //   setIsLoading(true);
  //   try {
  //     await deleteAdvert(advertId);
  //     setIsLoading(false);
  //     navigate('/');
  //   } catch (error) {
  //     setIsLoading(false);
  //     navigateAfterRequestError(error, navigate);
  //   }
  // };

  if (isLoading) {
    return 'Loading...';
  }

  return (
    advert && (
      <AdvertDetail onDelete={handleDelete} isLoading={isLoading} {...advert} />
    )
  );
}

export default AdvertPage;
