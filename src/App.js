import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from './component/Jumbo';
import About from './component/About';
import Projects from './component/Projects';
import Other from './component/Other';

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <About/>
      <Projects/>
      <Other/>
    </div>
  );
}

export default App;
