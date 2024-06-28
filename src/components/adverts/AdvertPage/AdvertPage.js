import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
//import { getAdvert, deleteAdvert } from '../service';
import { getAdvert } from '../../../store/selectors';


import navigateAfterRequestError from '../../../utils/navigateAfterRequestError';
import { loadAdvert } from '../../../store/actions';

//Verificar si es service
import { deleteAdvert } from '../service';
import { getUi } from '../../../store/selectors';

function AdvertPage() {
  const { advertId } = useParams();

  // const advert = useSelector(getAdvert(advertId));
  // console.log("advert en page", advert)
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

  const advert = useSelector(getAdvert(advertId));
  console.log("advert en page", advert)

  const handleDeleteAdvert = () => {
    dispatch(deleteAdvert(advertId));
  };

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
      <AdvertDetail onDelete={handleDeleteAdvert} isLoading={isLoading} {...advert} />
    )
    // <p>Prueba</p>
  );
}

export default AdvertPage;
