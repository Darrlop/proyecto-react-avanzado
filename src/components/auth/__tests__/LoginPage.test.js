import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../LoginPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { authLogin } from "../../../store/actions";
import { toBeDisabled, toBeEnabled } from "@testing-library/jest-dom";

jest.mock('../../../store/actions');
//Para evitar warnings con esLint
const userType = (input, text) => userEvent.type(input, text);

describe('LoginPage', () => {

  const state = { auth: false, ui: { pending: false, error: null } };
  const store = {
    dispatch: () => { },
    getState: () => state,
    subscribe: () => { },
  };
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider >,
    );


  test('Snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();

  });


  test('shouls dispatch authLogin action', () => {

    const email = 'email';
    const password = 'password';
    const remember = false;

    renderComponent();

    const emailInput = screen.getByLabelText(/email/i); // Uso expresiones regulares. La 'i' indica que no es sensible a Mayus/Minus
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole(/button/);

    expect(submitButton).toBeDisabled();
    act(() => userType(emailInput, email));
    act(() => userType(passwordInput, password));

    expect(submitButton).toBeEnabled();
    userEvent.click(submitButton);

    // expect(authLogin).toHaveBeenCalledWith({ checkSession, username, password });
    expect(authLogin).toHaveBeenCalledWith({ email, password, remember });
  });

});