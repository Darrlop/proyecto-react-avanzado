import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, uiResetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const resetError = () => dispatch(uiResetError());

  const { pending, error } = useSelector(getUi)
  const isLoading = pending;

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });


  const handleSubmit = credentials => {
    dispatch(authLogin(credentials));
  };

  return (
    <div>
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
