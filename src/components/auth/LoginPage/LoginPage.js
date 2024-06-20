import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { login } from '../service';
import LoginForm from './LoginForm';

import { useDispatch, useSelector } from 'react-redux';
import { authLogin, authLoginFulfilled, authLoginPending, authLoginRejected, uiResetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //const [error, setError] = React.useState(null);
  //const [isLoading, setIsLoading] = React.useState(false);


  //const resetError = () => setError(null);
  const resetError = () => dispatch(uiResetError());

  const { pending, error } = useSelector(getUi)
  const isLoading = pending;

  const handleSubmit = async credentials => {
    //setIsLoading(true);
    try {
      dispatch(authLoginPending());
      await login(credentials);
      //setIsLoading(false);
      dispatch(authLoginFulfilled());
      dispatch(authLogin());
      const to = location.state?.from?.pathname || '/';
      navigate(to);
    } catch (error) {
      // setIsLoading(false);
      // setError(error);
      dispatch(authLoginRejected(error));
    }
  };

  return (
    <div>
      {/* <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>...logeándose en nodepop</p>} */}
      <LoginForm onSubmit={handleSubmit} isLoading={pending} />
      {isLoading && <p>...logeándose en nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
