import T from 'prop-types';

import useForm from '../../../hooks/useForm';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit, isLoading }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const { email, password, remember } = credentials;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:
        <input id="email" name="email" value={email} onChange={handleChange} />
      </label>
      <label htmlFor="password">Password:
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <input
        type="checkbox"
        name="remember"
        checked={remember}
        onChange={handleChange}
      />
      <button disabled={!validate(validEmail, validPassword, () => !isLoading)}>
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default LoginForm;
