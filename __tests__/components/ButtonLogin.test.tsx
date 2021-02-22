import { render } from '@testing-library/react';
import ButtonLogin from '../../components/ButtonLogin';
describe('ButtonLogin', () => {
  it('Should render button', () => {
    const { container } = render(<ButtonLogin title="Entrar" loading={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Button in not loading mode', () => {
    const { getByText } = render(<ButtonLogin title="Entrar" loading={false} />);

    expect(getByText('Entrar').textContent).toBe('Entrar');
  });

  it('should render Button in loading mode', () => {
    const { container } = render(<ButtonLogin title="Entrar" loading={true} />);

    expect(container.firstChild?.firstChild?.nodeName).toBe('svg');
  });
});
