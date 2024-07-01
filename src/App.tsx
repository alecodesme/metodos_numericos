import './App.css';
import RongeKuttaView from "../src/rongekutta/view/RongeKutta";
import Euler from './euler/view/Euler';
import FixedPoint from './punto-fijo/view/FixedPoint';
import Newton from './newton/view/Newton';
import LeastSquares from './minimos_cuadrados/LeastSquares';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = ['ronge-kutta', 'euler', 'punto-fijo', 'newton', 'minimos-cuadrados']

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 10,
        height: 30
      }}>
        {
          options.map((option) => {
            return <div
              style={{
                padding: 5,
                backgroundColor: selectedOption === option ? 'blue' : 'gray',
                color: 'white',
                width: 150
              }}
              onClick={() => {

                setSelectedOption(option)
              }}>{option}</div>
          })
        }
      </div>
      {selectedOption === 'ronge-kutta' ? <RongeKuttaView /> : <></>}
      {selectedOption === 'euler' ? <Euler /> : <></>}
      {selectedOption === 'punto-fijo' ? <FixedPoint /> : <></>}
      {selectedOption === 'newton' ? <Newton /> : <></>}
      {selectedOption === 'minimos-cuadrados' ? <LeastSquares /> : <></>}
    </div>
  );
}

export default App;
