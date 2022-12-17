import { render } from '@testing-library/react';
import MapView from './MapView';

it('should render map view', () => {
    const mapView = render(<MapView />);
    expect(mapView).not.toBe(null);
});