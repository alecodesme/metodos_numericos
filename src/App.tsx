import './App.css';
import RongeKuttaView from "../src/rongekutta/view/RongeKutta";
import Euler from './euler/view/Euler';
import FixedPoint from './punto-fijo/view/FixedPoint';
import Newton from './newton/view/Newton';

function App() {
  return (
    <div className="App">
      <RongeKuttaView />
      <Euler />
      <FixedPoint />
      <Newton />
    </div>
  );
}

export default App;
