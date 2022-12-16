import './App.css';
import Home from './Components/Home/Home';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App" data-testid="app">
      <Home data-testid="home"></Home>
    </div>
  );
}

export default App;
