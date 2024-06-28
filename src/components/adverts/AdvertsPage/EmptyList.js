import React from 'react';
import T from 'prop-types';

import { Link } from 'react-router-dom';

function EmptyList({ advertsCount }) {
  return (
    <div>
      <p>Lo siento, no hay anuncios disponibles</p>
      {advertsCount > 0 ? (
        'Redefine tu búsqueda'
      ) : (
        <Link to="new">Anímate y crea el 1º anuncio</Link>
      )}
    </div>
  );
}

EmptyList.propTypes = {
  advertsCount: T.number.isRequired,
};

export default EmptyList;
