import React, { useEffect } from 'react';


import { CheckboxGroup } from '../../common';
import { useSelector, useDispatch } from 'react-redux';
import { getTags } from '../../../store/selectors';
import { loadTags } from '../../../store/actions';



function SelectTags(props) {

  const dispatch = useDispatch();
  const tags = useSelector(getTags);

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  return <CheckboxGroup options={tags} {...props} />;
}

export default SelectTags;
