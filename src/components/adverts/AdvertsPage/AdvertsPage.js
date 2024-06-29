import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersForm from './FiltersForm';
import AdvertsList from './AdvertsList';
import EmptyList from './EmptyList';
import storage from '../../../utils/storage';
import { defaultFilters, filterAdverts } from './filters';

import { getStateAdverts } from '../../../store/selectors';
import { getUi } from '../../../store/selectors';
//import navigateAfterRequestError from '../../../utils/navigateAfterRequestError';
import { loadAdverts } from '../../../store/actions';

const getFilters = () => storage.get('filters') || defaultFilters;
const saveFilters = filters => storage.set('filters', filters);


function AdvertsPage() {

  const dispatch = useDispatch();
  const adverts = useSelector(getStateAdverts);
  console.log("ADVERTS ->", adverts)
  const { isLoading } = useSelector(getUi);
  const [filters, setFilters] = useState(getFilters);

  useEffect(() => {
    dispatch(loadAdverts());
    // 
  }, [dispatch(loadAdverts())]);



  useEffect(() => {
    saveFilters(filters);
  }, [filters]);


  const filteredAdverts = filterAdverts(adverts, filters);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <EmptyList advertsCount={adverts.length} />
      )}
    </>
  );
}

export default AdvertsPage;
