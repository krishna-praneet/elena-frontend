import { render } from '@testing-library/react';
import Home from './Home';

it('should render home', () => {
    const home = render(<Home />);
    expect(home).not.toBe(null);
});

it("should render User Input Component", () => {
    const { queryByTestId } = render(<Home />);
    const userInput = queryByTestId('user-input');
  
    expect(userInput).toBeDefined();
});

it("should render Map View Component", () => {
    const { queryByTestId } = render(<Home />);
    const mapView = queryByTestId('map-view');
  
    expect(mapView).toBeDefined();
});