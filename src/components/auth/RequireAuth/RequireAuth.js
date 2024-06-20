import T from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIslogged } from '../../../store/selectors';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  //const { isLogged } = useSelector(state => state.auth);
  const isLogged = useSelector(getIslogged);

  return isLogged ? (children) : (<Navigate to="/login" state={{ from: location.pathname }} replace />);

};

RequireAuth.propTypes = {
  children: T.node.isRequired,
};

export default RequireAuth;
