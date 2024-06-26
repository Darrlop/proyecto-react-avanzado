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

  //const resetError = () => setError(null);
  const resetError = () => dispatch(uiResetError());

  const { pending, error } = useSelector(getUi)
  const isLoading = pending;


  const handleSubmit = async credentials => {
    try {
      dispatch(authLoginPending());
      await login(credentials);
      dispatch(authLoginFulfilled());
      dispatch(authLogin());
      const to = location.state?.from?.pathname || '/';
      navigate(to);
    } catch (error) {
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
