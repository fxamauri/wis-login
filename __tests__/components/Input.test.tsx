import { render } from '@testing-library/react';
import Input from '../../components/Input';
describe('Input', () => {
  it('Should render Input', () => {
    const { container } = render(<Input name="password" label="Password" isInvalid={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render with invalid message', () => {
    const { getByTestId } = render(
      <Input
        name="password"
        label="Password"
        isInvalid={true}
        invalidMessage="there was an error"
      />,
    );

    const inputMessage = getByTestId('input-message');
    expect(inputMessage).toBeInTheDocument();
    expect(inputMessage.textContent).toBe('there was an error');
  });
});
