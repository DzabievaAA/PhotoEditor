import React from 'react';
import './App.css';
import WorkSpace from './WorkSpace/WorkSpace.jsx';
import Slider from './Slider/Slider';
import Slider_saturation from './Slider saturation/Slider_saturation'


function App() {
  return ( 
  <div className="App">
      <WorkSpace/>
      {/* <Slider/> */}
      <div>
      <Slider_saturation/>
      </div>
      <div>
      <Slider_saturation/>
      </div>
      <div>
      <Slider_saturation/>
      </div>
    </div>
  );
}

export default App;

