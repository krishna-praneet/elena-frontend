import { render } from '@testing-library/react';
import Home from './Home';

test('it should render home', () => {
    const home = render(<Home />);
    expect(home).not.toBe(null);
});

test("it should render User Input Component", () => {
    const { queryByTestId } = render(<Home />);
    const userInput = queryByTestId('user-input');
  
    expect(userInput).toBeDefined();
});

test("it should render Map View Component", () => {
    const { queryByTestId } = render(<Home />);
    const mapView = queryByTestId('map-view');
  
    expect(mapView).toBeDefined();
});