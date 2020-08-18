import React from 'react';
import './App.css';
import WorkSpace from './WorkSpace/WorkSpace.jsx';
import Navigation from './Navig/Navigation.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

//ColorChange
function App() {
  const [ mode, setMode] = React.useState("NONE");

  return ( 
  <div className="App">
      <Navigation setMode={setMode}/>
      <WorkSpace setMode={setMode} mode={mode} />
    </div>
  );
}

export default App;

