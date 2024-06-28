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
  const advert = useSelector(getAdvert(advertId));
  const { isLoading } = useSelector(getUi);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(loadAdvert(advertId));
  }, [dispatch, advertId]);

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
