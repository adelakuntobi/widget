import React from 'react';
import './App.scss';
// import Example from './components/Modal';
import Landing from './components/Landing';
import Verify from './components/Verify';

function App() {
  return (
    <div className="App ">
      <Landing />
      <Verify />
      {/* <Example /> */}
    </div>
  );
}

export default App;
