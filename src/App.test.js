import { render } from '@testing-library/react';
import App from './App';

it('should render App Component', () => {
  render(<App />);
});

it("should render Home Component", () => {
  const { queryByTestId } = render(<App />);
  const home = queryByTestId('home');

  expect(home).toBeDefined();
});