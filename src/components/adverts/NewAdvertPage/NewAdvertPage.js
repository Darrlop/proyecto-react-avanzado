import React from 'react';
import { useDispatch } from 'react-redux';

import { createNewAdvert } from '../../../store/actions';
import NewAdvertForm from './NewAdvertForm';

//
//import navigateAfterRequestError from '../../../utils/navigateAfterRequestError';

function NewAdvertPage() {
  const dispatch = useDispatch();

  const handleSubmit = newAdvert => {
    //createAdvert(newAdvert);
    dispatch(createNewAdvert(newAdvert))
  };

  return <NewAdvertForm onSubmit={handleSubmit} />;
}


export default NewAdvertPage;
