import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import { getAdvert } from '../../../store/selectors';
import navigateAfterRequestError from '../../../utils/navigateAfterRequestError';
import { loadAdvert } from '../../../store/actions';
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
