import './App.css';
import Home from './Components/Home/Home';
import 'mapbox-gl/dist/mapbox-gl.css';

/**
 * Renders Home component which has User Input and Map View components
 * @returns 
 */
function App() {
  return (
    <div className="App" data-testid="app">
      <Home data-testid="home"></Home>
    </div>
  );
}

export default App;
