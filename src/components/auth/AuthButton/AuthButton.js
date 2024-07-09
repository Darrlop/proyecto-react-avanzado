import { Link } from 'react-router-dom';

import { ConfirmationButton } from '../../common';
import { logout } from '../service';

import { useSelector, useDispatch } from 'react-redux';
import { getIslogged } from '../../../store/selectors';
import { authLogout } from '../../../store/actions';

const AuthButton = () => {

  const isLogged = useSelector(getIslogged);
  const dispatch = useDispatch();

  const handleLogoutConfirm = async () => {
    await logout();
    dispatch(authLogout());

  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="¿Estás seguro?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

export default AuthButton;
