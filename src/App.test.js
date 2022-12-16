import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

test("it should render Home Component", () => {
  const { queryByTestId } = render(<App />);
  const home = queryByTestId('home');

  expect(home).toBeDefined();
});