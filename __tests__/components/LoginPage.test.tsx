import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from '../../components/LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  it('Should render loginPage', () => {
    const { container } = render(<LoginPage />);

    (useSelector as jest.Mock).mockImplementation((cb) =>
      cb({
        loading: false,
      }),
    );

    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should be able to login', () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginPage />);

    (useSelector as jest.Mock).mockImplementation((cb) =>
      cb({
        loading: true,
      }),
    );

    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);

    fireEvent.change(getByPlaceholderText('user.name@mail.com'), {
      target: { value: 'email@email.com' },
    });

    fireEvent.change(getByPlaceholderText('*******'), {
      target: { value: 'astrongpassword' },
    });
    //
    fireEvent.submit(getByTestId('login-form'));
    //
    expect(dispatch).toHaveBeenCalled();
    // fireEvent.click(getByTestId('button-login'));
    // button-login
  });
});
